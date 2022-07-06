import {combineReducers} from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itinerariesReducer";
import userReducer from "./userReducer";
import activityReducer from "./activitiesReducer"

const mainReducer = combineReducers({
    citiesReducer,
    itineraryReducer,
    userReducer,
    activityReducer,
})
export default mainReducer