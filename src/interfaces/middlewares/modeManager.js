const _ = require('lodash');

const createRedisClient = require('../../infra/redis');
const {
    KingJamesBibleUrl,
} = require('../../../config/config');
const {
    DICTIONARY_KEY_IN_REDIS
} = require('../../../config/constants');


module.exports = async (req, res, next) => {
    try {
        cacheMode = JSON.parse(_.get(req, ['query', 'cacheMode'], true));
        req.dictionarySource = _.get(req, ['query', 'dictionarySource'], KingJamesBibleUrl);
        console.log(`source: ${req.dictionarySource}`);

        if (cacheMode) {
            req.redisClient = await createRedisClient();
            let cachedWordsMap = await req.redisClient.get(DICTIONARY_KEY_IN_REDIS);
            if (cachedWordsMap) {
                console.log('return from cache');
                return res.send(JSON.parse(cachedWordsMap));
            }
        };

        next();

    } catch (error) {
        next(new Error(error));
    }
}