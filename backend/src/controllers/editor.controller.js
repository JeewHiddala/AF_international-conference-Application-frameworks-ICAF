const Editor = require('../models/editor.model');       //import editor model

const createEditor = async (req, res) => {       //create a editors to db.
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

const getAllEditorsDetails = async (req, res) => {       //get all editors details.
    await Editor.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getSelectedEditorDetails = async (req, res) => {          //get selected editor details.
    if (req.params && req.params.id) {
        await Editor.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data : data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

module.exports = {
    createEditor,
    getAllEditorsDetails,
    getSelectedEditorDetails
};