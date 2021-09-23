const { Router } = require('express')
const tokenizerController = require('./controller');

const router = Router();

router.get('/api/tokenizer', tokenizerController);

module.exports = router;
