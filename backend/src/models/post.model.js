const mongoose = require('mongoose');       //import mongoose

const PostSchema = new mongoose.Schema({    //make schema
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    submittedDate: { type: Date, required: true, trim: true },
    status: { type: String, required: true, trim: true },
    approvedDate: { type: Date, required: true ,trim: true },
    admins: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'admins'}],
    editors: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'editors'}]
});

const Post = mongoose.model('posts', PostSchema);        //give name for collection
module.exports = Post; 
