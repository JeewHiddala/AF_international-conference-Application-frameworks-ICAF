const mongoose = require('mongoose');       //import mongoose

const AdminSchema = new mongoose.Schema({    //make schema
    name: { type: String, required: true, trim: true },
    email: { type: Number, required: true },
    dateOfBirth: { type: String, required: true, trim: true },
    address: { type: Number, required: true },
    mobileNumber: { type: Number, required: true },
    password: { type: String, required: true, trim: true },
    editors: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'editors'}],
    reviewers: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'reviewers'}]
});

const Admin = mongoose.model('admins', AdminSchema);        //give name for collection
module.exports = Admin;