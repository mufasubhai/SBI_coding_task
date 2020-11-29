import { combineReducers } from 'redux';
import airTravelsErrors from './air_travels_errors_reducer.js';

const errorsReducer = combineReducers({

    airTravels: airTravelsErrors
});

export default errorsReducer;