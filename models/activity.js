const mongoose = require ("mongoose")

const activitySchema = new mongoose.Schema({
    nameActivity: {type: String, required: true},
    itineraryActivity: {type: mongoose.Types.ObjectId, ref:'itineraries'},
    imageActivity: {type: String, required: true},
    descriptionActivity: {type: String, required: true},

})

const Activity = mongoose.model("activities", activitySchema)
module.exports = Activity