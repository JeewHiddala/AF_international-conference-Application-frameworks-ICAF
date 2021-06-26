const Editor = require('../models/editor.model');       //import editor model

const createEditor = async (req, res) => {       //create a admin to db.
    if (req.body) {
        const editor = new Editor(req.body);
        editor.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

module.exports = {
    createEditor
};