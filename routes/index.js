const express = require('express');
const homeController = require('../controllers/homeController');
const postsController = require('../controllers/postsController');
const userController = require('../controllers/usersController');



const router = express.Router();
router.get('/', homeController.index);
router.get('/posts', postsController.posts );
router.get('/:id/post', postsController.postId);
router.get('/users/login', userController.login);
router.get('/posts/add', postsController.addPost);
router.post('/posts/add', postsController.addAction);

module.exports = router;