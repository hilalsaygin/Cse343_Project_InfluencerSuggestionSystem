const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

const reqString = {
  type: String,
  null: true

};
const reqNumber = {
  type: Number,
  null: true

};
const reqArray = {
  type: Array,
  null: true
};

const topMediaSchema = new mongoose.Schema({
  id: reqString,
  caption: reqString,
  media_url: reqString,
  like_count: reqNumber,
  comments_count: reqNumber,
  like_count: reqNumber,
  comments_count: reqNumber,
  IGI_media: reqNumber
});


const tourSchema = new mongoose.Schema({

  "id": reqString,
  "username": reqString,
  "website": reqString,
  "name": reqString,
  "biography": reqString,
  "followers_count": reqNumber,
  "follows_count" : reqNumber,
  "media_count": reqNumber,
  "profile_picture_url": reqString,
  "category" : reqArray,
  "IGI" : reqNumber,
  "top_media": [topMediaSchema]
  
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
tourSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});


tourSchema.pre(/^find/, function(next) {
  this.find({ secretTour: { $ne: true } });

  this.start = Date.now();
  next();
});

tourSchema.post(/^find/, function(docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

// AGGREGATION MIDDLEWARE
tourSchema.pre('aggregate', function(next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

  console.log(this.pipeline());
  next();
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;