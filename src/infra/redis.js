const { createClient } = require('redis');

module.exports = async () => {
    try {
        const client = createClient();
        client.on('error', (error) => {
            throw new Error('Redis Client Error', error);
        });
        await client.connect();
        return client;
    } catch (error) {
        throw new Error(error);
    }
};