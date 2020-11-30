import React from 'react';
import { connect } from 'react-redux'
import Table from "./table"
import {fetchAirTravels, fetchAirTravel, createAirTravel, updateAirTravel, deleteAirTravel } from '../../../actions/air_travel_actions'



const mSTP = state => ({
  airTravels: Array.from(Object.values(state.entities.airTravels))
});


const mDTP = dispatch => ({
    fetchAirTravels: () => dispatch(fetchAirTravels()),
    fetchAirTravel: (airTravelId) => dispatch(fetchAirTravel(airTravelId)),
    createAirTravel: (airTravel) => dispatch(createAirTravel(airTravel)),
    deleteAirTravel: (airTravelId) => dispatch(deleteAirTravel(airTravelId)),
    updateAirTravel: (airTravelId) => dispatch(updateAirTravel(airTravelId))

});




export default connect(mSTP, mDTP)(Table)