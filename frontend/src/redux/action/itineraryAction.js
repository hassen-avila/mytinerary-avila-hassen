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
                console.log(res)
                return res
                
            }catch (err) {
                console.log(err)
            }
        }
    },
}
export default itinerariesActions