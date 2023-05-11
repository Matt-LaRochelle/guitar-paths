const router = require('express').Router();
let EarTraining = require('../models/earTraining.model');


//First route
router.route('/').get((req, res) => {
    EarTraining.find()
    .then(earTraining => res.json(earTraining))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Handles Incoming http post requests
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const single = Number(req.body.single);
    const interval = Number(req.body.interval);

    const newEarTraining = new EarTraining({
        username,
        single,
        interval,
    });

    newEarTraining.save()
    .then(() => res.json('EarTraining added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Not touching below this for now



//Read
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Delete
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;