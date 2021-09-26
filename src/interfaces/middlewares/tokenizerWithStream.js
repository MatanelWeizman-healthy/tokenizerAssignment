const axios = require('axios');
const _ = require('lodash');

const dataPreProcessing = require('../../application/utils/dataPreProcessing');
const createMapFromProcessedData = require('../../application/utils/createMapFromProcessedData');
const { redisTtlInSeconds } = require('../../../config/config');
const { DICTIONARY_KEY_IN_REDIS } = require('../../../config/constants');



module.exports = async (req, res, next) => {
    try {
        const streamMode = JSON.parse(_.get(req, ['query', 'streamMode'], true));
        const cacheMode = JSON.parse(_.get(req, ['query', 'cacheMode'], true));

        if (!streamMode) {
            return next();
        }
        console.log('process with stream');
        console.log(`cacheMode: ${cacheMode.toString()}`);

        const { data } = await axios({
            method: 'get',
            url: req.dictionarySource,
            responseType: 'stream'
        })

        let wordsMap = new Map();
        let lastElement;
        data.on('data', (chunk) => {
            let skipLastWord = false;
            const partialData = chunk.toString();
            const wordsArray = dataPreProcessing(partialData);

            if (lastPreviousChunkWordWasTruncated(wordsArray[0], lastElement)) {
                wordsArray[0] = `${lastElement}${wordsArray[0]}`;
            }

            lastElement = wordsArray[wordsArray.length - 1];

            if (lastElement !== '') {
                skipLastWord = true;
            }
            // 

            wordsMap = createMapFromProcessedData(wordsArray, wordsMap, skipLastWord);
        })

        data.on('end', async () => {
            wordsMap = [...wordsMap.entries()];
            if (cacheMode) {
                await req.redisClient.set(DICTIONARY_KEY_IN_REDIS, JSON.stringify(wordsMap), {
                    EX: redisTtlInSeconds,
                });
            }
            res.send(wordsMap);
        })

    } catch (error) {
        throw new Error(error);
    };
}

const lastPreviousChunkWordWasTruncated = (firstWordInNewChunk, lastElementInPreviousChunk) => {
    return firstWordInNewChunk !== '' && lastElementInPreviousChunk !== '';
}