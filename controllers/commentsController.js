const Itinerary = require('../models/itinerary')

const commentControllers = {

    addComment: async (req, res) => {

        const {userId , comment} = req.body
        const user = req.user.id
        try {
            const itinerary = await Itinerary
                .findOneAndUpdate({_id: userId}, {$push: {comments: {comment: comment, userId: user}}}, {new: true})
                .populate("comments.userId",{photoUser:1, email:1, nameUser:1})
            res.json({success: true,
                response: itinerary.comments,
                message: "thanks for comment!"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "try again please!"})
        }
    },

    modifyComment: async (req, res) => {
        const {userId,comment} = req.body
        try {
            const newComment = await Itinerary.findOneAndUpdate({"comments._id":userId}, {$set: {"comments.$.comment": comment }}, {new: true})
            console.log(newComment)
            res.json({ success: true, response:{newComment}, message:"tu comentario a sido modificado" })
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! try again!" })
        }
    },

    deleteComment: async (req, res) => {
        console.log('REQ.PARAMS --------------------------------------')
        console.log(req)
        const userId = req.params.id
        try {
            const itinerary = await Itinerary
            .findOneAndUpdate({"comments._id": userId}, {$pull: {comments: {_id: userId}}}, {new: true})
            .populate("comments.userId",{photoUser:1, email:1, nameUser:1})
            res.json({success: true,
                response: itinerary.comments,
                message: "the comment has been deleted"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "try again!"})
        }
    }
}

module.exports = commentControllers