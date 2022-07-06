import axios from "axios";

const activitiesActions = {
    findActivityFromItinerary:(id)=>{
        return async(dispatch, getState) =>{
        const res = await axios.get(`http://localhost:4000/api/activity/itinerary/${id}`)  
        dispatch({type:"FINDACTIVITYFROMITINERARY", payload:res.data.response.info}) 
        return res
        }
    }
}
export default activitiesActions