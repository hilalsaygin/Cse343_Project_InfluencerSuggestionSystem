const { fail } = require('assert');
const express = require('express');
const session = require("express-session");
const cors = require("cors");
const userRouter = require('./routes/userRoutes');
const mongoDBstore = require("./mongodb").mongoDBstore;
const passport = require("./controllers/authController").passport;
const mongoose = require('mongoose')
const tourController = require('./controllers/tourController');
const morgan = require('morgan');
const Tour = require('./models/tours');
const { message } = require('statuses');
const app = express();
const tourRouther = require('./routes/tourRoutes');
const { connectToMongoDB } = require('./mongodb');



//1) middleware 
app.use(morgan('tiny'));
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  


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



app.use('/api/tours', tourRouther);

const MONGODB_URI = 'mongodb+srv://Influencer:influenceR.7590@influencer.z5lsmky.mongodb.net/Influencer?retryWrites=true&w=majority';

async function Connect() {
    await connectToMongoDB();
  }
  
  Connect();

  const SESSION_EXPIRES = 1 * 10 * 1000; // 10 seconds

  // MIDDLEWARES
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

 
console.log('express.urlencoded middleware loaded');

  app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: true,
      cookie: {
        expires: new Date(Date.now() + SESSION_EXPIRES),
      }, //10 seconds
      store: mongoDBstore,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  
  // API ENDPOINTS
  app.use("/api/users", userRouter);
  
  app.post(
    "/api/users/login",
    passport.authenticate("local"),
    function (req, res) {
      console.log(`${req.body.username} logged in.`);
  
      res.status(200).json({ msg: "Auth successful", data: req.session });
      return;
    }
  );
  

   module.exports = app;
