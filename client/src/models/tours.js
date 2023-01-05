const mongoose = require('mongoose');
const slugify = require('slugify');
// const validator = require('validator');

const tourSchema = new mongoose.Schema({

  "username":{
    type: String,
    null: true
  },
  "website":{
    type: String,
    null: true
  },
  "name": {
    type: String,
    null: true
  },
  "biography":{
    type: String,
    null: true
  },
  "followers_count":{

    type: Number,
    null: true
  },
  "media_count": {
    type: Number,
    null: true
  },
  "profile_picture_url": {
    type: String,
    null: true
  },
  "id": {
    type: String,
    null: true
  }
});



tourSchema.virtual('durationWeeks').get(function() {
  return this.duration / 7;
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
