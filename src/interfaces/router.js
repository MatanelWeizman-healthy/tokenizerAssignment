const { Router } = require('express')
const {
    modeManager,
    tokenizerWithStream,
    tokenizerWithoutStream,
} = require('./middlewares/index');

const router = Router();

router.get('/api/tokenizer', modeManager, tokenizerWithStream, tokenizerWithoutStream);

module.exports = router;
