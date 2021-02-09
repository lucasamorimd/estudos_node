const express = require('express');
const homeController = require('../controllers/homeController');
const postsController = require('../controllers/postsController');
const userController = require('../controllers/usersController');



const router = express.Router();
router.get('/', homeController.userMiddleware, homeController.index);
router.get('/posts', homeController.userMiddleware, postsController.posts );
router.get('/:id/post', homeController.userMiddleware, postsController.postId);
router.get('/users/login', homeController.userMiddleware, userController.login);

module.exports = router;