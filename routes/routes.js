const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers');
const { getItinerary, getOneItinerary, modifyItinerary, addItinerary, multiplesIteneraries, removeItinerary, findItineraryFromCity } = require('../controllers/itineraryControllers');
const {getCities, getOneCity, addCity, modifyCity, removeCity, multiplesCities} =citiesControllers
const {signInUser,singUpUsers} = require('../controllers/userControllers')

Router.route('/cities')
.get(getCities)
.post(addCity)

Router.route('/cities/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)

Router.route('/multiplesCities')
.post(multiplesCities)

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

Router.route('/auth/signUp')
.post(singUpUsers)

Router.route('/auth/signIn')
.post(signInUser)

module.exports = Router