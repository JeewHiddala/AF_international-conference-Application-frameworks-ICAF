const Editor = require('../models/editor.model');       //import editor model
const mongoose = require("mongoose");

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

const updateSelectedEditor = async (req, res) => {       //update selected editor
    if (req.params && req.params.id){
        const {id} = req.params;        // fetching the id of the editor.
        const editor = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No editor With That id');      // validating the editor id
        const updatedEditor = await Editor.findByIdAndUpdate(id, editor,{new : true});      // find editor and Update editor
        res.json(updatedEditor);
    }
}

module.exports = {
    createEditor,
    getAllEditorsDetails,
    getSelectedEditorDetails,
    updateSelectedEditor
};