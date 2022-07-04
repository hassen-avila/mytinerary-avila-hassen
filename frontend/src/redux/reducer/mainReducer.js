import {combineReducers} from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itinerariesReducer";
import userReducer from "./userReducer"

const mainReducer = combineReducers({
    citiesReducer,
    itineraryReducer,
    userReducer,
})
export default mainReducer