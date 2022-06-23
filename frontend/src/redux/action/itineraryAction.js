import axios from "axios";

const itinerariesActions = {
    getItineraries:(id)=>{
        return async(dispatch, getState) =>{
        const res = await axios.get(`http://localhost:4000/api/itinerary/cities/${id}`)   
        dispatch({type:"GETITINERARIES", payload:res.data.response.city}) 
        }
    }
}
export default itinerariesActions