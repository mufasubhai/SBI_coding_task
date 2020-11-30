
import React from 'react';
import { connect } from 'react-redux'
import {
    updateAirTravel,
    createAirTravel,
    deleteAirTravel,
    fetchAirTravel
} from "../../../actions/air_travel_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";


const FormData = (props) => (

<div>THIS IS THE FORM MODAL</div>
)
    
    
    
    
    



const mSTP = (state) => ({
    airTravels: Object.values(state.entities.airTravels), 
});

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
   closeModal: () => dispatch(closeModal()),
   updateAirTravel: (id) => dispatch(updateAirTravel(id)),
   deleteAirTravel: (id) => dispatch(deleteAirTravel(id)),
   fetchAirTravel: (id) => dispatch(fetchAirTravel(id)),
   createAirTravel: (airTravel) => dispatch(createAirTravel(airTravel)),
});

export default connect(mSTP, mDTP)(FormData)