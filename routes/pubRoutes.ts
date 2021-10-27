var express = require('express');
var router = express.Router();
var Auth= require('../middleware/auth.ts')

router.post('/post/save/:id',Auth.auth)

module.exports = router;