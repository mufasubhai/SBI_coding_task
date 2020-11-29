import { combineReducers } from 'redux';
import airTravelsReducer from './air_travels_reducer.js';

const entitiesReducer = combineReducers({
    airTravels: airTravelsReducer

});

export default entitiesReducer;