const express = require('express');
const router = express.Router();

const test_controller = require('../controllers/test.controller');

router.get('/', test_controller.test2);
router.post('/create', test_controller.product_create)

module.exports = router;
