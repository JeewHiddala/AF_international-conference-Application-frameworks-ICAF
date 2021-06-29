const express = require('express');
const router = express.Router();
const attendeePaymentController = require('../controllers/attendeePayment.controller');

module.exports = function () {
    router.post('/create', attendeePaymentController.createAttendee);
    router.get('/:id', attendeePaymentController.getAttendeeDetails);
    router.patch('/update/:id', attendeePaymentController.updateAttendee);

    return router;
}