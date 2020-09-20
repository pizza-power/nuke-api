const mongoose = require('mongoose'); 
const { stringify } = require('querystring');

// TODO add date to schema
const PlantSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }, 
    power: {
        type: Number, 
        required: true
    }
});

const Plant = mongoose.model("Plant", PlantSchema); 
module.exports = Plant;