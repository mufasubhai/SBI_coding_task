import {
    CLEAR_ERRORS,
    RECEIVE_AIR_TRAVEL_ERRORS
} from '../actions/air_travel_actions'


export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_AIR_TRAVEL_ERRORS:
            return action.errors
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};
