const { Sequelize, DataTypes } = require('sequelize');
const { dbConnectionString } = require('../../../config/config');


module.exports = class DB {
    constructor() {
        this.sequelize = null;
    }
    async init() {
        await this.connect();
        await this.createModel();
    }

    async connect() {
        try {
            this.sequelize = new Sequelize(dbConnectionString);
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error(`Unable to connect to the database: ${error}`);
        }
    }

    async createModel() {
        try {
            const Dictionary = this.sequelize.define('Dictionary', {
                word: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                repetitions: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                }
            },{
                timestamps:false,
            });
            await Dictionary.sync();
        } catch (error) {
            throw new Error(error);
        }
    }
}