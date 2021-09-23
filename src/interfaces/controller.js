const Tokenizer = require('../application/Tokenizer');
const { KingJamesBibleUrl } = require('../../config/config');
const _ = require('lodash');

module.exports = async (req, res, next) => {
    try {
        const options = {
            streamMode: _.get(req, ['query', 'streamMode'], true),
            cacheMode: _.get(req, ['query', 'cacheMode'], true),
        }
        const tokenizer = new Tokenizer(KingJamesBibleUrl, options);
        const wordsMap = await tokenizer.execute();
        res.send([...wordsMap.entries()])
    } catch (error) {
        throw new Error(error);
    }
}