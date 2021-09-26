const Server = require('../interfaces/Server');

module.exports = class App {
    constructor() {
        this.server = new Server();
    }
    async start() {
        try {
            await this.server.start();
        } catch (error) {
            throw new Error(error);
        }
    }
}








