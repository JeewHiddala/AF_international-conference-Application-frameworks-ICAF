//import subject model
const Admin = require('../models/admin.model');

//create a subject to db
const createAdmin = async (req, res) => {
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

module.exports = {
    createAdmin
};