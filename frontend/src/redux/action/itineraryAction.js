import axios from "axios";

const itinerariesActions = {
    getItineraries:(id)=>{
        return async(dispatch, getState) =>{
        const res = await axios.get(`http://localhost:4000/api/itinerary/cities/${id}`)   
        console.log(res.data.response.info);
        dispatch({type:"GETONEITINERARY", payload:res.data.response.info}) 
        }
    }
}
export default itinerariesActions