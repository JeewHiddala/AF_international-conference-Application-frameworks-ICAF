//import admin model
const Admin = require('../models/admin.model');
const mongoose = require("mongoose");

const createAdmin = async (req, res) => {       //create a admin to db.
    if (req.body) {
        const admin = new Admin(req.body);
        admin.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllAdminsDetails = async (req, res) => {       //get all admin details.
    await Admin.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const deleteAdmin = async (req, res) => {
    if (req.params && req.params.id) {
        const {id} = req.params; //fetching the id of the post item
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No admin with id: ${id}`); //Validating the post id

        await Admin.findByIdAndRemove(id); //Find and Remove operation

        res.json({message: "Conference deleted successfully."});
    }
}


module.exports = {
    createAdmin,
    getAllAdminsDetails,
    deleteAdmin
    
};