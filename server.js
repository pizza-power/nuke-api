const express = require('express');
const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs');
const helmet = require('helmet');
const path = require('path');

// change as needed
const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/www.nuke-api.com/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/www.nuke-api.com/fullchain.pem")
};


require('dotenv').config();

const app = express();
app.use(express.json()); // returns data as json
app.use(helmet());
app.use(express.static(__dirname + '/public'));

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, 'build'), {dotfiles: 'allow'}));

const plantRouter = require('./routes/PlantRoutes');
app.use(plantRouter);

const mongoIP = process.env.MONGO_IP     // "127.0.0.1"
const mongoPORT = process.env.MONGO_PORT // "27017"

mongoose.connect('mongodb://' + mongoIP + ':' + mongoPORT + '/mongo', {
  useNewUrlParser: true,  useUnifiedTopology: true
});

const PORT = process.env.NODE_PORT || 3333;
https.createServer(options, app).listen(PORT);