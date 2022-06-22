const initialState ={
    city:[],
    cities:[],
    auxiliar:[],
}

const citiesReducer=( state = initialState, action) =>{

    switch (action.type){
        case "GETCITIES":
            return{
                ...state,
                cities: action.payload,
                auxiliar: action.payload
            }
        case "GETONECITY":
            return{
                ...state,
                city: action.payload,
            }
        default:
            return state
    }
}
export default citiesReducer