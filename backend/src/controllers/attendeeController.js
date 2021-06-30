const mongoose = require("mongoose");
const Attendee = require('../models/attendeeModel');

const createAttendee = async (req, res) => {      
    if (req.body) {
        const attendee = new Attendee(req.body);
        attendee.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllAttendeesDetails = async (req, res) => {       
    await Attendee.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getSelectedAttendeeDetails = async (req, res) => {         
    if (req.params && req.params.id) {
        await Attendee.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data : data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


const deleteAttendee = async (req, res) => {       
    if (req.params && req.params.id) {
        const {id} = req.params;           
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No attendee with id: ${id}`);     
        await Attendee.findByIdAndRemove(id);        
        res.json({message: "attendee deleted successfully."});
    }
}

module.exports = {
    createAttendee,
    getAllAttendeesDetails,
    getSelectedAttendeeDetails,
    deleteAttendee
};