

const initialState ={
 itineraries:[],
 getOneItinerary:[]
}
const itineraryReducer=( state = initialState, action) =>{
switch (action.type){
case "GETITINERARIESFROMCITY":
            return{
                ...state,
                itineraries: action.payload,
            }
case "GETONEITINERARY":
            return{
                ...state,
                getOneItinerary: action.payload,
            }
default:
            return state  
    }
    
}
export default itineraryReducer