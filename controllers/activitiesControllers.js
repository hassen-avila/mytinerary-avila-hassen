const Activity = require('../models/activity')

const  activitiesControllers ={

    getActivities : async(req, res) => {
        let activities
        let error = null
        try{
            activities= await Activity.find().populate("itineraryActivity")
        }
        catch(err) {err = error}
        res.json({
            response: error ? 'ERROR' : activities,
            success: error ? false : true,
            error: error
        })
    },
    addActivity : async (req,res) => {
        const {nameActivity,itineraryActivity,imageActivity,descriptionActivity}=req.body
        let activities
        let error = null
        try{
            activities= await new Activity({
                nameActivity: nameActivity,
                itineraryActivity: itineraryActivity,
                imageActivity: imageActivity,
                descriptionActivity: descriptionActivity,
            }).save();
        }
        catch(err) {error = err}
        res.json({
            response: error ? 'ERROR' : {activities},
            success: error ? false : true,
            error: error
        })
    },
    findActivityFromItinerary: async (req,res) =>{
        let itineraryId=req.params.id
        let info
        let error= null
        try{
            info=await Activity.find({itineraryActivity:itineraryId})
            .populate("itineraryActivity")
        }catch (err) {error=err}
        res.json({
            response: error ? "ERROR" : {info},
            success: error ? false : true,
            error: error
        })
    }

}
module.exports = activitiesControllers