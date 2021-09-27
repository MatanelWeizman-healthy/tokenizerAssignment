const express = require('express');
const cors = require('cors');
const httpLogger = require('../infra/httpLogger.js');
const router = require('./router');
const { port } = require('../../config/config');
const errorHandler = require('./errorHandler');

module.exports = class Server {
    constructor() {
        this.app = express();
        this.httpLogger = httpLogger;
        this.port = port || 3000;
    }
    async start() {
        try {
            this.app
                .use(cors())
                .use(this.httpLogger)
                .use(express.json())
                .use(express.urlencoded({ extended: false }))
                .use(router)
                .use(errorHandler);
            return this.app.listen(this.port, () => console.log(`listen in ${port}`));
        } catch (error) {
            throw (error);
        }
    }
}