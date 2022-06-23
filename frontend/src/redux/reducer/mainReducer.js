import {combineReducers} from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itinerariesReducer";

const mainReducer = combineReducers({
    citiesReducer,
    itineraryReducer,
})
export default mainReducer