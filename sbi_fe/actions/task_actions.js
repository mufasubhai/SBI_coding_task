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

const receiveTasks = airTravels => ({
    type: RECEIVE_AIR_TRAVELS,
    airTravels
})

const receiveTask = airTravel => ({
    type: RECEIVE_AIR_TRAVEL,
    airTravel
})

const removeTask = airTravelId => ({
    type: REMOVE_AIR_TRAVEL,
    airTravelId
})

export const fetchTasks = () => dispatch => (
    airTravelAPIUtil.fetchTasks()
        .then(airTravels => (dispatch(receiveTasks(airTravels))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const fetchTask = airTravel => dispatch => (
    airTravelAPIUtil.fetchTask(airTravel)
        .then(airTravel => (dispatch(receiveTask(airTravel))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const createTask = airTravel => dispatch => (
    airTravelAPIUtil.createTask(airTravel)
        .then(airTravel => (dispatch(receiveTask(airTravel))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const updateTask = airTravel => dispatch => (
    airTravelAPIUtil.updateTask(airTravel)
        .then(airTravel => (dispatch(receiveTask(airTravel))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const deleteTask = airTravelId => dispatch => (
    airTravelAPIUtil.deleteTask(airTravelId)
        .then(() => dispatch(removeTask(airTravelId)))
)