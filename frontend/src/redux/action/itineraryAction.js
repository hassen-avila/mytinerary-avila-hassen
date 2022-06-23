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
    }
}
export default itinerariesActions