
import React from 'react';
import { connect } from 'react-redux'
import FormDataLI from './form_data_line_item'
import {
    updateAirTravel,
    createAirTravel,
    deleteAirTravel,
    fetchAirTravel
} from "../../../actions/air_travel_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";



const FormData = (props) => {
    
    const placeHolder = () => {
        let placeHolder = [];
        props.currentAirTravels.forEach(value => placeHolder.push(value));
     
        return placeHolder;
    }
    
 return   <div>
    <ul>
        {
            Object.values(placeHolder()).map(element => (
                <div>test</div>
            ))
        }
    </ul>
</div>
}
    
    
    
    
    



const mSTP = (state) => ({
    airTravels: Object.values(state.entities.airTravels), 
    currentAirTravels: Object.values(state.entities.currentAirTravels)
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