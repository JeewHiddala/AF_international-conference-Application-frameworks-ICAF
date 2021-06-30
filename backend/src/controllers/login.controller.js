const dotenv = require('dotenv');       //environmental variables
const Attendee = require('../models/attendee.model');
const Presenter = require('../models/presenter.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//get jwt secret key
const JWT_SECRET = process.env.JWT_SECRET;

const login = async (req, res) => {
    const { username, password } = req.body;

    // Check empty fields
    if (!username || !password) {
        return res.status(500).send({ error: error.message });
    }

    const user = await Attendee.findOne({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user._id }, JWT_SECRET);
        const data = user._id;
        const Utype = "attendee";
        res.json({
            token,
            data,
            Utype
        });
    } else {
        const userP = await Presenter.findOne({ username });
        if (userP && bcrypt.compareSync(password, userP.password)) {
            const token = jwt.sign({ id: userP._id }, JWT_SECRET);
            const data = userP._id;
            const Utype = "presenter";
            //res.status(200).send({ data: data._id });
            res.json({
                token,
                data,
                Utype
            });
        }
    }
    
    res.status(400).send({ error: 'Username or password is incorrect' });
}

module.exports = {
    login
};