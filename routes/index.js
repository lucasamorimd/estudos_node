const express = require('express');
const homeController = require('../controllers/homeController');
const postsController = require('../controllers/postsController');


const router = express.Router();
router.get('/', homeController.index);
router.get('/posts',postsController.posts );
router.get('/:id/post', postsController.postId);

module.exports = router;