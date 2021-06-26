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

const getAllAdminsDetails = async (req, res) => {       //get all admins details.
    await Admin.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getSelectedAdminDetails = async (req, res) => {          //get selected admin details.
    if (req.params && req.params.id) {
        await Admin.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data : data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const updateSelectedAdmin = async (req, res) => {
    if (req.params && req.params.id){
        const {id} = req.params;        //fetching the id of the admin.
        const admin = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No admin With That id');      //Validating the admin id
        const updatedAdmin = await Admin.findByIdAndUpdate(id, admin,{new : true});      //Find admin and Update admin
        res.json(updatedAdmin);
    }
}

const deleteAdmin = async (req, res) => {
    if (req.params && req.params.id) {
        const {id} = req.params;            //fetching the id of the admin item
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No admin with id: ${id}`);       //validating the admin id.
        await Admin.findByIdAndRemove(id);         //find admin and remove admin.
        res.json({message: "Admin deleted successfully."});
    }
}


module.exports = {
    createAdmin,
    getAllAdminsDetails,
    getSelectedAdminDetails,
    deleteAdmin,
    updateSelectedAdmin
};