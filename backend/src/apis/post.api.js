const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

module.exports = function () {
    router.post('/create', postController.createPost);        // create post.
    router.get('/', postController.getAllPostsDetails);       //get all posts.
    router.get('/:id', postController.getSelectedPostDetails);       //get selected posts details.
    return router;
}