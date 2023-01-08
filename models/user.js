const mongoose = require("mongoose");
const validator = require('validator');
const Tour = require('./../models/tours');

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  nickname: {
    required: true,
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  password: {
    required: true,
    type: String
  },
  favorites: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Tour'
  }]
});

module.exports = mongoose.model("User", userSchema);