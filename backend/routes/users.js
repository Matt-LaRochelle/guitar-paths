const router = require('express').Router();
let User = require('../models/user.model');


//First route
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Handles log in functionality
router.route('/').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username: username})
        .then((docs) => {
            console.log("result: ", docs);
            if (docs.password === password) {
                res.json("You good.");
            } else {
                console.log("No good.");
            }
        })
        .catch((err) => {
            console.log(err)
        });
});

//Handles Incoming http post requests ***FOR REGISTERING A USER***
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