const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


//I don't know...
const app = express();
const port = process.env.PORT || 2977;


//Middleware?
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


//use the files
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//Start backend server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});