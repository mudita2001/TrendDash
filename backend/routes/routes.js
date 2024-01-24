var express = require('express');

const router = express.Router();
var dataController = require('../src/report/dataController');

router.route('/dashboard/getAll').get(dataController.getData);

module.exports = router;