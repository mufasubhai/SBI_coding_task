import { SET_CURRENT_AIR_TRAVELS } from "../actions/current_air_travel_actions"

const currentAirTravelReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_CURRENT_AIR_TRAVELS:
  
      return Object.assign({}, state, {currentAirTravels: action.currentAirTravels})
    default:
      return state;
  }
};

export default currentAirTravelReducer;