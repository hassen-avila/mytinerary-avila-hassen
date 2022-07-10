import axios from "axios";

const itinerariesActions = {
    getItinerariesFromCity:(id)=>{
        return async(dispatch, getState) =>{
        const res = await axios.get(`http://localhost:4000/api/itinerary/cities/${id}`)   
        dispatch({type:"GETITINERARIESFROMCITY", payload:res.data.response.info}) 
        }
    },
    getOneItinerary:(id)=>{
        return async(dispatch, getState) =>{
        const res = await axios.get(`http://localhost:4000/api/itinerary/${id}`)  
        dispatch({type:"GETONEITINERARY", payload:res.data.response.itine}) 
        }
    },
    likeDislike: (id) => {
        const token = localStorage.getItem('token')
        return async() => {
            try {
                const res = await axios.put(`http://localhost:4000/api/itineraries/likes/${id}`,{},
                    {headers: {Authorization: "Bearer "+token}}
                    
                )
                
                return res
                
            }catch (err) {
                console.log(err)
            }
        }
    },
    addComment: (commentaries) => { 
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`http://localhost:4000/api/itineraries/comment`,{...commentaries},
                {headers: {Authorization: "Bearer "+token}
                
            } 
            )
            dispatch({type: 'MESSAGE', payload: {view: true, message: res.data.message, success: res.data.success}
            })
            return res
        }
     },

    modifyComment: (comment) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const answer = await axios.put(`http://localhost:4000/api/itineraries/comment`,{...comment},
            {headers: {Authorization: "Bearer "+token}}
        )
        dispatch({type: 'message', payload: {view: true, message: answer.data.message, success: answer.data.success}
        })
        return answer.data.response
        }
    },

    deleteComment: (id) => {
        const token = localStorage.getItem('token')
            return async (dispatch, getState) => {
                const answer = await axios.post(`http://localhost:4000/api/itineraries/comment/${id}`,{},
                {headers: {Authorization: "Bearer "+token}}
            )
            dispatch({type: 'MESSAGE', payload: {view: true, message: answer.data.message, success: answer.data.success}
            })
            return answer
        }
    }
}
export default itinerariesActions