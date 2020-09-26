const express = require('express'); 
const plantModel = require('../models/PlantModel'); 
const app = express(); 


// get all data
app.get('/nuke-api/v1/plants/all', async (req, res) => {
    const plants = await plantModel.find({})
    try {
        res.json(plants); 
    } catch (err) {
        res.status(500).send(err);
    }
});

// get data from a specific date
app.get('/nuke-api/v1/plants/:date', async (req, res) => {
    let date = req.params.date;
    const data = await plantModel.find({
        date: date
    })

    try {
        res.json(data); 
    } catch (err) {
        res.status(500).send(err);
    }
});

// get plant status by name
app.get('/nuke-api/v1/plants/name/:name', async (req, res) => {
    let name = req.params.name;
    const data = await plantModel.find({
        name: name
    });

    try {
        res.json(data); 
    } catch (err) {
        res.status(500).send(err);
    }
});

// get plant status by date
app.get('/nuke-api/v1/plants/:name/:date', async (req, res) => {
    let name = req.params.name;
    let date = req.params.date;
    // console.log(date)
    const data = await plantModel.find({
        name: name,
        date: date
    })

    try {
        res.json(data); 
    } catch (err) {
        res.status(500).send(err);
    }
});

// default route
// app.get('*',function (req, res) {
//         res.redirect('/nuke-api/v1/plants/all');
// });

module.exports = app;