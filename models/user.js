const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    nameUser:{type:String, require:true},
    lastNameUser:{type:String, require:true},
    photoUser:{type:String, require:true},
    email: {type:String, required: true},
    password: [{type:String, required: true}],
    from: {type:Array,},
    country: {type:String, required:true},
    verification: {type:Boolean, required:true},
    uniqueString: {type:String, required:true},
})

const User = mongoose.model("users", userSchema)
module.exports = User