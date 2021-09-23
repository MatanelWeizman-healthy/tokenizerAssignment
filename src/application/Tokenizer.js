const axios = require('axios');
const _ = require('lodash');

const dataPreProcessing = require('./utils/dataPreProcessing');
const createMapFromProcessedData = require('./utils/createMapFromProcessedData');

module.exports = class Tokenizer {
    constructor(sourceUrl, options) {
        this.sourceUrl = sourceUrl;
        this.cacheMode = _.get(options, 'cacheMode', true);
        this.cache = null;
        this.streamMode = _.get(options, 'streamMode', true);
    }

    execute() {
        if (streamMode) {
            this.executeWithStream();
        } else {
            this.executeWithoutStream();
        }
    }

    async executeWithoutStream() {
        try {
            if (this.cacheMode && this.cache) {
                return this.cache;
            };
            const { data } = await axios.get(this.sourceUrl);
            const wordsArray = dataPreProcessing(data);
            const wordsMap = createMapFromProcessedData(wordsArray);
            if (this.cacheMode) {
                this.cache = wordsMap;
            };
            return wordsMap;
        } catch (error) {
            throw new Error(error);
        };
    };

    async executeWithStream() {
        try {
            if (this.cacheMode && this.cache) {
                return this.cache;
            }
            // ADD CONTENT HERE


            // 
            if (this.cacheMode) {
                this.cache = wordsMap;
            }
            return wordsMap;
        } catch (error) {
            throw new Error(error);
        };
    };
};