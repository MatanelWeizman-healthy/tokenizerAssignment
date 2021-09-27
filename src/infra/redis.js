const { createClient } = require('redis');
const { redis } = require('../../config/config');

module.exports = async () => {
    try {
        const client = createClient({
            url:`redis://${redis.host}:${redis.port}`
        });

        client.on('error', (error) => {
            throw new Error(`Redis Client Error: ${error}`);
        });

        await client.connect();
        return client;
        
    } catch (error) {
        throw (error);
    }
};