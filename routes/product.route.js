const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', product_controller.test);
router.get('/posts', product_controller.allpost);
router.post('/create', product_controller.product_create);
router.get('/:id', product_controller.product_details);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);

router.post('/create2', product_controller.thought_create);
router.post('/sendComment', product_controller.comment_send);

// router.get('/posts2', product_controller.allthought);


module.exports = router;
