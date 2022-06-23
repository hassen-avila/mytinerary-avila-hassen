import axios from "axios";

const citiesActions = {
    getCities: ()=>{
        return async(dispatch, getState) =>{
            const res = await axios.get('http://localhost:4000/api/cities')
            dispatch({type:"GETCITIES", payload:res.data.response.cities})
        }
    },
    getOneCity:(id)=>{
        return async(dispatch, getState) =>{
            const res = await axios.get(`http://localhost:4000/api/cities/${id}`)
            dispatch({type:"GETONECITY", payload:res.data.response.city})
        }
    },
    filterCities:(searchTerm) =>{
        return async(dispatch, getState) =>{
            dispatch({type:"FILTERCITIES", payload:searchTerm})
        }
    }
}
export default citiesActions 