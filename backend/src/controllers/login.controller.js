import bcrypt from 'bcryptjs';
//import config from '../../config';
import jwt from 'jsonwebtoken';
//import auth from '../../middleware/auth';
const Attendee = require('../models/attendee.model');
const Presenter = require('../models/presenter.model');

//const mongoose = require("mongoose");

const login = async (req, res) => {
    const { username, password } = req.body;

    // Check empty fields
    if (!username || !password) {
        return res.status(500).send({ error: error.message });
    }

    const user = await Attendee.findOne({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
        res.json(user);
    } else {
        const userP = await Presenter.findOne({ username });
        if (userP && bcrypt.compareSync(password, userP.password)) {
            const token = jwt.sign({ sub: userP.id }, config.secret, { expiresIn: '7d' });
            res.json(userP);
        }
    }
    res.status(400).json({ message: 'Username or password is incorrect' });
}

module.exports = {
    login
};