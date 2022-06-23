const initialState ={
    city:[],
    cities:[],
    auxiliar:[],
    filterCity:[],
}

const citiesReducer=( state = initialState, action) =>{

    switch (action.type){
        case "GETCITIES":
            return{
                ...state,
                cities: action.payload,
                filterCity:action.payload,
                auxiliar: action.payload
            }
        case "GETONECITY":
            return{
                ...state,
                city: action.payload,
            }
        case "FILTERCITIES":
            let filter = state.cities.filter(everyCity => everyCity.name.toLowerCase().trim().startsWith(action.payload.toLowerCase().trim()))
            return{
               ...state,
               filterCity : filter
            }
    
        default:
            return state
    }
}
export default citiesReducer