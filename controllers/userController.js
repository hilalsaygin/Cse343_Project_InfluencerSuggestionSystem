const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');
const { email } = require('validator');
const Joi = require("joi");
const Token = require('../models/token');
const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const Tour = require('../models/tours');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "destekekibi.getinfluenced@gmail.com",
    pass: "zazldlvliaudnbuj",
  }
});
// Generate a password reset token
const token = crypto.randomBytes(16).toString("hex");

module.exports = {
  hello: (req, res) => {
  res.status(200).json({ express: "Hello From Express" });
  },
  register: async (req, res) => {
  //ensure that there is no user with the same email address
  const exists = await UserModel.exists({ email: req.body.email });
  if (!exists) {
  if (!validator.isEmail(req.body.email)) {
  res.status(400).json({ msg: 'Please provide a valid email', data: null });
  return;
  }
  
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const data = new UserModel({
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
      password: hashedPassword,
    });
    try {
      data.save();
      res.status(200).json({ msg: "Sucessfully registered!", data });
    } catch (error) {
      res.status(400).json({ msg: error.message, data: null });
    }
  } else {
    res
      .status(400)
      .json({ msg: "E-mail address already in use!", data: null });
  }
  
  },
  login: (req, res) => {},
  logout: (req, res) => {
    if (req.session) {
      req.session.destroy();
    }
  },
  updateFavorites: async (req, res) => {
    // Find user by email
    const user = await UserModel.findOne({ email: req.body.email }).populate('favorites');
  
    // If "toAdd" is an array, add new influencers to favorites
    if (req.body.toAdd && Array.isArray(req.body.toAdd)) {
      // Find influencers by username
      const influencerPromises = req.body.toAdd.map(async (username) => {
        return await Tour.findOne({ username });
      });
      const influencers = await Promise.all(influencerPromises);
  
      // Add influencers to user's favorites
      user.favorites.push(...influencers);
      await user.save();
      res.status(200).json({ success: true, data: user });
    }
    // If "toDelete" is defined, delete influencer from favorites
    else if (req.body.toDelete) {
      // Find influencer by username
      const influencer = await Tour.findOne({ username: req.body.toDelete });
      if (influencer) {
        // Find index of influencer in favorites array
        const index = user.favorites.findIndex((favorite) => favorite._id.toString() === influencer._id.toString());
        if (index !== -1) {
          user.favorites.splice(index, 1);
          await user.save();
          res.status(200).json({ success: true, data: user });
        } else {
          res.status(404).json({ success: false, error: "Favorite not found" });
        }
      } else {
        res.status(404).json({ success: false, error: "Influencer not found" });
      }
    } else {
      res.status(400).json({ success: false, error: "Invalid request" });
    }
  },
  getFavorites: async (req, res) => {
    // Find user by email
  const user = await UserModel.findOne({ email: req.body.email }).populate('favorites');
  
  // Find influencers by _id
  const influencerPromises = user.favorites.map(async (favorite) => {
    return await Tour.findById(favorite._id);
  });
  const influencers = await Promise.all(influencerPromises);
  
  // Return array of influencer information
  const favorites = influencers.map((influencer) => {
    return {
      username: influencer.username,
      name: influencer.name,
      media_count: influencer.media_count,
      followers_count: influencer.followers_count,
      follows_count: influencer.follows_count,
      category: influencer.category,
      IGI: influencer.IGI,
      profile_picture_url: influencer.profile_picture_url   

      // Add any other fields you'd like to include here
    };
  });
  
  res.status(200).json({ success: true, data: favorites });

  },
  
  sendEmail: async (to, subject, text) => {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        port: 465,
        secure: true,
        auth: {
          user: "destekekibi.getinfluenced@gmail.com",
          pass: "zazldlvliaudnbuj",
        },
      });
  
      await transporter.sendMail({
        from: "destekekibigetinfluenced@gmail.com",
        to: to,
        subject: subject,
        text: text,
      });
  
      console.log("email sent sucessfully");
    } catch (error) {
      console.log(error, "email not sent");
    }
  },
  
  resetPassword: async (req, res) => {
    try {
      const schema = Joi.object().keys({
        email: Joi.string().email().required()
      });
      const { error } = schema.validate(req.body);
      if (error) return res.status(400).send("Error");
  
      const user = await UserModel.findOne({ email: req.body.email });
      if (!user)
        return res.status(400).send("user with given email doesn't exist");
  
      let token = await Token.findOne({ userId: user._id });
      if (!token) {
        token = await new Token({
          userId: user._id,
          token: crypto.randomBytes(32).toString("hex"),
        }).save();
      }
  
      const link="https://leetcode.com/accounts/password/reset/key/3xnty-67d-453a65ca08e0c71d538f/";
      module.exports.sendEmail(user.email, "Password reset", link);
  
      res.send("password reset link sent to your email account");
  
    } catch (error) {
      res.send("An error occured");
      console.log(error);
    }
  },
  resetPasswordConfirm: async (req, res) => {
    try {
      const schema = { password: req.body.password };
      const { error } = schema.validate(req.body);
      if (error) return res.status(400).send("Error");
  
      const user = await UserModel.findOne(req.body.email);
      if (!user) return res.status(400).send("invalid link or expired");
  
      const token = await token.findOne({
        userId: user._id,
        token: req.params.token,
      });
      if (!token) return res.status(400).send("Invalid link or expired");
  
      user.password = req.body.password;
      await user.save();
      await token.delete();
  
      res.send("password reset sucessfully.");
    } catch (error) {
      res.send("An error occured");
      console.log(error);
    }
  },
  
  };