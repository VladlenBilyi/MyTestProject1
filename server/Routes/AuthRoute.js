const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

// Load User Model
const User = require('../models/UserModel');


router.post('/sign-up', async (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            errors.email = 'Email already exist.';
            return res.status(400).json(errors);
        }
        user = new User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        const data = await user.save();
        return res.json(data);
        
    } catch (error) {
        res.status(500).send('Server error');
    }
});

router.post('/sign-in', async (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Email Not Found' }] });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Password' }] });
        }

        const payload = { id: user.id, name: user.name };

        jwt.sign(
            payload,
            process.env.TOKEN_KEY,
            { expiresIn: 3600 },
            (err, token) => {
                res.json({
                    success: true,
                    token: 'Bearer ' + token
                });
            });

    } catch (error) {
        res.status(500).send('Server error');
    }
});

router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        res.json({
            id: req.user.id,
            name: req.user.name,
            email: req.user.email
        });
    } catch (error) {
        res.status(500).send('Server Error');
    }

});

module.exports = router;