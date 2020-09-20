const express = require('express'); 
const mongoose = require('mongoose');
const createError = require('http-errors');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const plantRouter = require('./routes/PlantRoutes');

const app = express(); 
app.use(express.json()); // returns data as json

mongoose.connect('mongodb://*IPHERE*:32768/mongo', {
  useNewUrlParser: true,  useUnifiedTopology: true 
});

app.use(plantRouter); 

app.listen(3333, () => { console.log('Server is running on port 3333')});
