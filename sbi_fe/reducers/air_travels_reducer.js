import {
    RECEIVE_AIR_TRAVEL,
    RECEIVE_AIR_TRAVELS,
    REMOVE_AIR_TRAVEL
} from '../actions/air_travels_actions.js'

const tasksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_AIR_TRAVELS:
            return Object.assign({}, state, action.airTravels)
        case RECEIVE_AIR_TRAVEL:
            return Object.assign({}, state, { [action.airTravel.id]: action.airTravel })
        case REMOVE_AIR_TRAVEL:
            const newState = Object.assign({}, state);
            delete newState[action.airTravelId];
            return newState;
        default:
            return state;
    }
}

export default tasksReducer;