const router = require('express').Router();
let User = require('../models/user.model');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

//Create a dynamic web token (COOKIE!)
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}



//First route
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Handles log in for existing user functionality
router.route('/sign').post(async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        res.send("All fields must be filled in");
    } else {
        const user = await User.findOne({ username })

        if (!user) {
            res.send('Incorrect username');
        } else {
            const match = await bcrypt.compare(password, user.password)
    
            if (!match) {
                res.send('Incorrect password.')
            } else {
                const token = createToken(user._id);
                console.log(token)
                res.status(200).json({user, token})
            }
        }
    }
});

//         User.findOne({username: username})
//         .then((docs) => {
//             // console.log("result: ", docs);
//             bcrypt.compare(password, docs.password, function(err, result) {
//                 if (result) {
//                     const token = createToken(docs._id);
//                     res.json({username, token});
//                 } else if (err) {
//                     res.send("Password is incorrect.");
//                 }
//             });
//         })
//         .catch((err) => {
//             console.log("error:", err);
//             res.send("Username not in database.");
//         });
// });

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
        
        const token = createToken(newUser._id);
        console.log(token)
        newUser.save()
        .then(() => res.status(200).json({email, token}))
        .catch(err => res.status(400).json('Error: ' + err));


    });

    
});

module.exports = router;