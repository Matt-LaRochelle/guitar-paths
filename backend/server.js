const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


//Create the server (app) and run on port 2977 OR ??online?? URI?
const app = express();
const port = process.env.PORT || 3001;


//Middleware - express.json parses json files. Cors builds a bridge from front end to back end
app.use(cors());
app.use(express.json());


//Connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


//Import the files
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const earTrainingRouter = require('./routes/earTraining')


//use the files
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('./earTraning', earTrainingRouter)

//Start backend server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});