const express = require('express'); 
const mongoose = require('mongoose');

require('dotenv').config();

const plantRouter = require('./routes/PlantRoutes');

const app = express(); 
app.use(express.json()); // returns data as json
app.disable('x-powered-by');

const mongoIP = process.env.MONGO_IP 
const mongoPORT = process.env.MONGO_PORT

mongoose.connect('mongodb://' + mongoIP + ':' + mongoPORT + '/mongo', {
  useNewUrlParser: true,  useUnifiedTopology: true 
});

app.use(plantRouter); 

const PORT = process.env.NODE_PORT || 3333; 
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`)});