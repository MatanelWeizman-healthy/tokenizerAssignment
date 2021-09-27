const express = require('express');
const app = express();
const { portForTest } = require('../config/config');

module.exports = ()=>{
    app.get('/', (req, res) => {
        res.sendFile('/Users/matanel/Desktop/tokenizerAssignment/test/sourceForTest.txt');
    })
    return app.listen(portForTest);
};
     




