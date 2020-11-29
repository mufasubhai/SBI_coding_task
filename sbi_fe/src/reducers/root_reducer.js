import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer.js'
import errorsReducer from './errors_reducer.js'

const rootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer
});


export default rootReducer;