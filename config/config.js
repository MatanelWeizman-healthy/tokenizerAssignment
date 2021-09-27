module.exports = {
    KingJamesBibleUrl: 'http://www.gutenberg.org/cache/epub/10/pg10.txt',
    port: 3000,
    redisTtlInSeconds: 10,
    portForTest: 3001,
    address: `http://localhost:3000/api/tokenizer`,
    redis: {
        host: process.env.RUN_FROM_DOCKER?'redis-service':'localhost',
        port: 6379,
    },
    queryForTest: '?dictionarySource=http://localhost:3001&&cacheMode=false',
}