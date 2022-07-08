const Router = require('express').Router();
const passport = require('../config/passport')
const citiesControllers = require('../controllers/citiesControllers');
const { getItinerary, getOneItinerary, modifyItinerary, addItinerary, multiplesIteneraries, removeItinerary, findItineraryFromCity, likeDislike} = require('../controllers/itineraryControllers');
const {getCities, getOneCity, addCity, modifyCity, removeCity, multiplesCities} =citiesControllers
const {signInUser,singUpUsers,verifyMail} = require('../controllers/userControllers')
const {addActivity, getActivities, findActivityFromItinerary} = require('../controllers/activitiesControllers')
const {verifyToken} = require('../controllers/userControllers')
const {addComment, modifyComment,deleteComment} = require('../controllers/commentsController')
const validator = require('../config/validator')





// Route city

Router.route('/cities')
.get(getCities)
.post(addCity)

Router.route('/cities/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)

Router.route('/multiplesCities')
.post(multiplesCities)

// Route itinerary

Router.route('/itinerary')
.post(addItinerary)
.get(getItinerary)

Router.route('/itinerary/:id')
.delete(removeItinerary)
.put(modifyItinerary)
.get(getOneItinerary)

Router.route('/itinerary/cities/:id')
.get(findItineraryFromCity)

Router.route('/itinerary/:id')
.get(getOneItinerary)


Router.route('/itinerariesMulti')
.post(multiplesIteneraries)

// Route user

Router.route('/auth/signUp')
.post(validator, singUpUsers)

Router.route('/auth/signIn')
.post(signInUser)

// Route verify mail

Router.route('/verify/:string')
.get(verifyMail)

// Route token

Router.route('/loginToken')
.get(passport.authenticate('jwt', {session:false}),verifyToken)

// Route activity

Router.route('/activity')
.post(addActivity)
.get(getActivities) 

Router.route('/activity/itinerary/:id')
.get(findActivityFromItinerary)

// Route likes

Router.route('/itineraries/likes/:id')
.put(passport.authenticate('jwt', {session:false}),likeDislike)

//Route Comments

Router.route('/itineraries/comment')
.post(passport.authenticate('jwt', {session:false}),addComment)
.put(passport.authenticate('jwt', {session:false}),modifyComment)

Router.route('/itineraries/comment/:id')
.post(passport.authenticate('jwt', {session:false}),deleteComment)

module.exports = Router