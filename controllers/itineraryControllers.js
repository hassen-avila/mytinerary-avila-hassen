const Itinerary = require('../models/itinerary')


const itineraryControllers={

    getItinerary : async(req, res) => {
        let itineraries
        let error = null
        try{
            itineraries= await Itinerary.find().populate("city")
        }
        catch(err) {err = error}
        res.json({
            response: error ? 'ERROR' : itineraries,
            success: error ? false : true,
            error: error
        })
    },

    addItinerary : async (req,res) => {
        const {city ,price,duration,user,like,userImage,itinerary,tags,activities}=req.body
        let itineraries
        let error = null
        try{
            itineraries= await new Itinerary({
                    city: city,
                    price: price,
                    duration: duration,
                    user: user,
                    like: like,
                    userImage: userImage,
                    itinerary: itinerary,
                    tags: tags,
                    activities:activities
            }).save();
        }
        catch(err) {error = err}
        res.json({
            response: error ? 'ERROR' : {itineraries},
            success: error ? false : true,
            error: error,
        })
    },

        getOneItinerary:async (req,res) => {

        const id=req.params.id
        let itine
        let error = null
        try{
            itine= await Itinerary.findOne({
                _id:id
            })
        }
        catch(err) {
            err = error
        }
        res.json({
            response: error ? 'ERROR' : {itine},
            success: error ? false : true,
            error: error
        })
    },

    modifyItinerary:async (req,res) => {
        const id=req.params.id
        const data=req.body.data
        let itinerarydb
        let error = null
        try{
            itinerarydb= await Itinerary.findOneAndUpdate({_id:id}, data,{ new:true })
        }
        catch(err) {
            err = error
        }
        res.json({
            respose: error ? 'ERROR' : itinerarydb,
            success: error ? false : true,
            error: error
        })
    },

    removeItinerary: async (req,res) =>{
        const id=req.params.id
        let itineraries
        let error=null
        try{
            itineraries= await Itinerary.findOneAndDelete({_id:id})
        }
        catch(err) {error=err}
        res.json({
            response: error ? 'ERROR' :{itineraries},
            success: error ? false : true,
            error: error
        })    
    },

    multiplesIteneraries: async (req, res) => {
        let object = []
        const data =req.body.data
        let error = null
        try {
            data.map(async (item) => {
                await new Itinerary({
                    city: item.city,
                    price: item.price,
                    duration: item.duration,
                    user: item.user,
                    like: item.like,
                    userImage: item.userImage,
                }).save()
            })
        } catch (err) { error = err }
        object = await Itinerary.find()
        res.json({
            response: error ? "ERROR" : {object},
            success: error ? false : true,
            error: error
        })
    },
    findItineraryFromCity: async (req,res) =>{
        let cityId=req.params.id
        let info
        let error= null
        try{
            info=await Itinerary.find({city:cityId})
            .populate("city").populate("comments.userId",{photoUser:1, email:1, nameUser:1})
        }catch (err) {error=err}
        res.json({
            response: error ? "ERROR" : {info},
            success: error ? false : true,
            error: error
        })
    },

    likeDislike: async (req,res) => {
        let tineraryId = req.params.id 
        let user = req.user.id
        try { 
            let tinerary = await Itinerary.findOne({_id:tineraryId}) 
            console.log(tinerary);
            if (tinerary.like.includes(user)) {
                Itinerary.findOneAndUpdate({_id:tineraryId}, {$pull:{like:user}}, {new:true})
                    .then(response => res.json({
                        response: response.like, 
                        success: true
                    }))
                    .catch(error => console.log(error))
            } else {
                Itinerary.findOneAndUpdate({_id:tineraryId}, {$push:{like:user}}, {new:true})
                    .then(response => res.json({
                        response: response.like, 
                        success: true
                    }))
                    .catch(error => console.log(error))
            }
        } catch (error) {
            res.json({
                response: error,
                success: false
            })
        } 
    }

}
module.exports = itineraryControllers