import * as airTravelAPIUtil from '../util/air_travel_util.js'

export const RECEIVE_AIR_TRAVELS = 'RECEIVE_AIR_TRAVELS';
export const RECEIVE_AIR_TRAVEL = "RECEIVE_AIR_TRAVEL";
export const REMOVE_AIR_TRAVEL = "REMOVE_AIR_TRAVEL";
export const RECEIVE_AIR_TRAVEL_ERRORS = "RECEIVE_AIR_TRAVEL_ERRORS"
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveErrors = errors => ({
    type: RECEIVE_AIR_TRAVEL_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
}) 

const receiveAirTravels = airTravels => ({
    type: RECEIVE_AIR_TRAVELS,
    airTravels
})

const receiveAirTravel = airTravel => ({
    type: RECEIVE_AIR_TRAVEL,
    airTravel
})

const removeAirTravel = airTravelId => ({
    type: REMOVE_AIR_TRAVEL,
    airTravelId
})

export const fetchAirTravels = () => dispatch => (
    airTravelAPIUtil.fetchAirTravels()
        .then(airTravels => (dispatch(receiveAirTravels(airTravels))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const fetchAirTravel = airTravel => dispatch => (
    airTravelAPIUtil.fetchAirTravel(airTravel)
        .then(airTravel => (dispatch(receiveAirTravel(airTravel))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const createAirTravel = airTravel => dispatch => (
    airTravelAPIUtil.createAirTravel(airTravel)
        .then(airTravel => (dispatch(receiveAirTravel(airTravel))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const updateAirTravel = airTravel => dispatch => (
    airTravelAPIUtil.updateAirTravel(airTravel)
        .then(airTravel => (dispatch(receiveAirTravel(airTravel))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const deleteAirTravel = airTravelId => dispatch => (
    airTravelAPIUtil.deleteAirTravel(airTravelId)
        .then(() => dispatch(removeAirTravel(airTravelId)))
)