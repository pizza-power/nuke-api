const express = require('express'); 
const plantModel = require('../models/PlantModel'); 
const app = express(); 
const path = require('path'); 

// send '/' index.html
app.get('/', function(req, res) {
    res.sendFile(path.resolve('index.html'));
});

// send examples
app.get('/examples.html', function(req, res) {
    res.sendFile(path.resolve('/documentation/examples.html'));
});

// send '/endpoints.html' index.html
app.get('/endpoints.html', function(req, res) {
    res.sendFile(path.resolve('/documentation/endpoints.html'));
});


// get all data
app.get('/plants/all', async (req, res) => {
    const plants = await plantModel.find({})
    try {
        res.json(plants); 
    } catch (err) {
        res.status(500).send(err);
    }
});

// get data from a specific date
app.get('/plants/:date', async (req, res) => {
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
app.get('/plants/name/:name', async (req, res) => {
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
app.get('/plants/:name/:date', async (req, res) => {
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

module.exports = app;