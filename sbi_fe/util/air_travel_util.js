export const fetchAirTravels = () => (
    $.ajax({
        method: 'GET',
        url: '/api/air_travels',
    })
)

export const fetchAirTravel = id => (
    $.ajax({
        method: 'GET',
        url: `/api/air_travels/${id}`
    })
)

export const createAirTravel = airTravel => {
    
 return   $.ajax({
        method: 'POST',
        url: `/api/air_travels`,
        data: { airTravel }
    })
}

export const updateAirTravel = airTravel => (
    $.ajax({
        method: 'PATCH',
        url: `/api/air_travels/${airTravel.id}`,
        data: { airTravel }
    })
)

export const deleteAirTravel = airTravelId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/air_travels/${airTravelId}`,
        data: airTravelId
    })
}