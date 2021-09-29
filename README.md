# Word's tokenizer

## Introduction

The generic tokenizer expose a REST API that will return the words list and the number of times they appear in the text 

## Review
### Tokenizer's endpoint
```url
    [GET] /api/tokenizer
```
### Tokenizer's modes

There are several modes in which the tokenizer can be run:
* **cacheMode** - boolean (true as default),  When true the output will be stored as a cache for a time as defined in the configuration file (10 seconds by default). When the output is retrieved from the cache there will be an indication of this in the console.

* **streamMode** - boolean (true as default). When true he processing will be done using streams

* **dictionarySource** - full URL as string ( King James’ Bible as default)

The parameters will be sent as query string, for example:
```url
    /api/tokenizer?dictionarySource=http://urlOfSomething.com&&cacheMode=false
```



## Usage

### Run

```zsh
    docker-compose up
```
or

```zsh
    npm start
```
in the last way we need local instance of Redis for using cache-mode

### Test
There are only e2e test
```zsh
    npm test
```
