
import React, {useState, useEffect} from 'react';
import TableLI from './table_li';

const Table = (props) => {
// let airTravel = props.airTravel.map(airTravel => (
//     [airTravel.area_code, airTravel.month, airTravel.passengers]
// ))
const filterArea = area => {
      props.airTravel.filter(airTravel => (airTravel.area_code === area) ) 
};

const averagePrice = (month) => {};

const totalPassengers = (month) => {
    props.airTravel.filter(airTravel.month === month)
        .reduce((acc, airTravel) => (acc + airTravel.passengers), 0)
};

return (


<div>
    <table>
        <tbody>
        <tr>
            <td></td>
            <th scope="col">Month 1</th>
            <th scope="col">Month 2</th>
            <th scope="col">Month 3</th>
            <th scope="col">Q1</th>
            <th scope="col">Month 3</th>
            <th scope="col">Month 4</th>
            <th scope="col">Month 5</th>
            <th scope="col">Q2</th>
            <th scope="col">Month 6</th>
            <th scope="col">Month 7</th>
            <th scope="col">Month 8</th>
            <th scope="col">Q3</th>
            <th scope="col">Month 10</th>
            <th scope="col">Month 11</th>
            <th scope="col">Month 12</th>
            <th scope="col">Q4</th>

        </tr>
      
        <tr>
            <th scope="row">Passenger Count</th>
     
        </tr>
        <tr>
            <th scope="row">Total Sales</th>
   
        </tr>
        <tr>
            <th scope="row">Average Ticket Price</th>
          
        </tr>
      {
        props.airTravels.map(airTravel => <TableLI airTravel={airTravel} key={airTravel.id}/>)
        }
        </tbody>
    </table>
    
    
</div>

)
}

export default Table;