const axios = require('axios');
const _ = require('lodash');

const dataPreProcessing = require('../../application/utils/dataPreProcessing');
const createMapFromProcessedData = require('../../application/utils/createMapFromProcessedData');
const { DICTIONARY_KEY_IN_REDIS } = require('../../../config/constants');
const { redisTtlInSeconds } = require('../../../config/config');

module.exports = async (req, res, next) => {
    try {
        const cacheMode = JSON.parse(_.get(req, ['query', 'cacheMode'], true));

        console.log('process without stream');
        console.log(`cacheMode: ${cacheMode.toString()}`);

        let wordsMap = new Map();
        const { data } = await axios.get(req.dictionarySource);
        const wordsArray = dataPreProcessing(data);
        wordsMap = createMapFromProcessedData(wordsArray, wordsMap);
        wordsMap = [...wordsMap.entries()];
        if (cacheMode) {
            await req.redisClient.set(DICTIONARY_KEY_IN_REDIS, JSON.stringify(wordsMap), {
                EX: redisTtlInSeconds,
            });
        }
        res.send(wordsMap);
    } catch (error) {
        next(error);
    };
}