var express = require('express');
var router = express.Router();
var Auth= require('../middleware/auth.ts')
var saveJsonToFile = require('../controller/savedata.ts')
var sendData = require('../controller/getdata.ts')

router.post('/save/:id',saveJsonToFile.saveJsonToFile)
router.get('/',sendData.sendData);

module.exports = router;