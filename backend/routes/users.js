const router = require('express').Router();
let User = require('../models/user.model');

const bcrypt = require('bcrypt');
const saltRounds = 10;


//First route
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Handles log in for existing user functionality
router.route('/sign').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username: username})
        .then((docs) => {
            // console.log("result: ", docs);
            bcrypt.compare(password, docs.password, function(err, result) {
                if (result) {
                    res.send("Password is correct.");
                } else {
                    res.send("Password is incorrect.");
                }
            });
        })
        .catch((err) => {
            console.log("error:", err)
            res.send("Username not in database.")
        });
});

//Handles registering a new user functionality
router.route('/add').post((req, res) => {
    

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        // Store hash in your password DB.

        const username = req.body.username;
        const password = hash
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

    
});

module.exports = router;