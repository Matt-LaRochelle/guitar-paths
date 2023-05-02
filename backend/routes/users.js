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
    const name = req.body.name;
    const age = req.body.age;
    const username = req.body.username;

    const newUser = new User({
        name,
        age,
        username
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;