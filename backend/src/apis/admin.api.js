const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

module.exports = function () {
    router.post('/create', adminController.createAdmin);
    router.get('/', adminController.getAllAdminsDetails);       //get all courses
    router.delete('/:id', adminController.deleteAdmin);         //update selected admin details
    return router;
}