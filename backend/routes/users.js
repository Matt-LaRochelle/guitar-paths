const router = require('express').Router();
let User = require('../models/user.model');


//First route
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Handles Incoming http post requests
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const birthday = req.body.birthday;
    const email = req.body.email;

    const newUser = new User({
        username,
        password,
        birthday,
        email
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;