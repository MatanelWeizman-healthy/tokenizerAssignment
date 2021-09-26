const Server = require('../interfaces/Server');

module.exports = class App {
    constructor() {
        this.server = new Server();
    }
    async start() {
        try {
            const app = await this.server.start();
            return app;
        } catch (error) {
            throw new Error(error);
        }
    }
}








