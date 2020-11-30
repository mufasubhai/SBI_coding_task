
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
    const months = {
    1:"January", 
    2:"February",
    3:"March",
    4:"April",
    5:"May",
    6:"June",
    7:"July",
    8:"August",
    9:"September",
    10:"October",
    11:"November",
    12:"December",
    }

  
    
 return   <div>
    <ul>
        <li className="modal_items">

            <th scope="col">Area Code</th>
            <th scope="col">Passenger Count</th>
            <th scope="col">Month</th>
            <th scope="col">Total Sales</th>
        </li>
        {
            props.currentAirTravels[0].map(el => (
            <li className="modal_items">
               
                <td>{el.area_code}</td>
                <td>{el.passengers}</td>
                <td>{months[el.month]}</td>
                <td>${el.sales}</td>

            </li>
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