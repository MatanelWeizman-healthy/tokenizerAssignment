module.exports = {
    KingJamesBibleUrl: 'http://www.gutenberg.org/cache/epub/10/pg10.txt',
    port: 3000,
    redisTtlInSeconds: 30,
    portForTest: 3001,
    address :`http://localhost:3000/api/tokenizer`,
    queryForTest:'?dictionarySource=http://localhost:3001&&cacheMode=false',
}


// ?dictionarySource=http://localhost:3001