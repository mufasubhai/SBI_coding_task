import { combineReducers } from 'redux';
import airTravelsReducer from './air_travels_reducer.js';
import currentAirTravelsReducer from './current_air_travels_reducer'

const entitiesReducer = combineReducers({
    airTravels: airTravelsReducer,
    currentAirTravels: currentAirTravelsReducer
});

export default entitiesReducer;