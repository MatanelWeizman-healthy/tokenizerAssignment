const Server = require('../interfaces/Server');
const DB = require('../infra/db/DB');

module.exports = class App {
    constructor() {
        this.db = new DB();
        this.server = new Server();
    }
    async start() {
        try {
            await this.db.init();
            await this.server.start();
        } catch (error) {
            throw new Error(error);
        }
    }
}








