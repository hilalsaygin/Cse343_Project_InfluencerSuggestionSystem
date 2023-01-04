const { fail } = require('assert');
const express = require('express');
const mongoose = require('mongoose')
const tourController = require('./controllers/tourController');
const morgan = require('morgan');
const Tour = require('./models/tours');
const { message } = require('statuses');
const app = express();
const tourRouther = require('./routes/tourRoutes');


//1) middleware 
app.use(morgan('tiny'));
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

//html dosyası içindi sonra bak buna
// app.use(express.static(`${__dirname/public}`));

app.use((req,res,next) => {
    console.log('Hello from the middleware....');
    next();
})

app.use((req,res,next) => {
    req.requestTime = new Date().toISOString();
    next();
})

// http methot
app.get('/', (req,res) => {
    res.status(200).json({message:'Hello from the server side.', app:'Users'});
});

app.post('/', (req,res) => {
    res.send('You can post the this point');
});



app.use('/api/users', tourRouther);

module.exports = app;
