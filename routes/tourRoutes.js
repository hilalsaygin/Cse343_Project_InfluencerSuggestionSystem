const express = require('express');
const tourController = require('./../controllers/tourController');
const routher = express.Router();




routher.param('username', tourController.checkUsername);  


routher
.route('/categories')
.get(tourController.getToursByCategory);

routher
.route('/popular')
.get(tourController.getPopular);

routher
.route('/')
.get(tourController.getAllTours)
.patch(tourController.updateTour)
.post(tourController.createTour);


routher
.route('/:username')
.get(tourController.getTour)
.delete(tourController.deleteTour);



module.exports = routher;
