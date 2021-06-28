const Post = require('../models/post.model');       //import post model
const mongoose = require("mongoose");

const createPost = async (req, res) => {       //create a post to db.
    if (req.body) {
        const post = new Post(req.body);
        post.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllPostsDetails = async (req, res) => {       //get all posts details.
    await Post.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}
const getSelectedPostDetails = async (req, res) => {          //get selected post details.
    if (req.params && req.params.id) {
        await Post.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data : data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}
module.exports = {
    createPost,
    getAllPostsDetails,
    getSelectedPostDetails,
};