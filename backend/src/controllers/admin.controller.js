//import subject model
const Admin = require('../models/admin.model');
const mongoose = require("mongoose");

//create a subject to db
const createAdmin = async (req, res) => {
    if (req.body) {
        const subject = new Admin(req.body);
        subject.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllAdminsDetails = async (req, res) => {
    await Admin.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const updateAdminDetails = async (req, res) => {
    if (req.params && req.params.id) {
        const {id} = req.params;
        const name = req.body;
        const email = req.body;
        const dateOfBirth = Date.parse(req.body);
        const address = req.body;
        const mobileNumber = req.body;
        const password = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Admin With That id'); //Validating the Conference id
        const updatedAdminDetails = await Admin.findByIdAndUpdate(name, email, dateOfBirth, address, mobileNumber, password, {new : true});
        res.json(updatedAdminDetails);
    }
}


module.exports = {
    createAdmin,
    getAllAdminsDetails
};