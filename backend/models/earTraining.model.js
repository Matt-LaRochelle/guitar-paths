const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const earTrainingSchema = new Schema({
    username: { type: String, required: true },
    single: { type: Number },
    interval: { type: Number },
}, {
    timestamps: true,
});

const EarTraining = mongoose.model('EarTraining', earTrainingSchema);

module.exports = EarTraining;