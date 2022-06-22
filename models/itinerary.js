const mongoose = require ("mongoose")

const itinerarySchema = new mongoose.Schema({
        city:{type: mongoose.Types.ObjectId, ref:'cities'},
        price:{type: Number, required: true},
        duration:{type: Number, required: true},
        user:{type: String, required: true},
        like:{type: Number, required: true},
        userImage:{type: String, required: true},
        activities:{type: Array, required: true},
        tags:{type: Array, require:true},
        itinerary:{type: String, require:true},
})

const Itinerary = mongoose.model("itineraries", itinerarySchema)
module.exports = Itinerary