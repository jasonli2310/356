const express = require('express');
const router = express.Router();

// Require the controllers
const product_controller = require('../controllers/product.controller');

router.get('/', product_controller.test);
router.get('/posts', product_controller.allpost);
router.post('/create', product_controller.product_create);
router.get('/:id', product_controller.product_details);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);
router.post('/create2', product_controller.thought_create);
router.post('/createComment', product_controller.comment_create);


module.exports = router;
