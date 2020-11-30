
import React, {useState, useEffect} from 'react';
import TableLI from './table_li';

const Table = (props) => {
// let airTravel = props.airTravel.map(airTravel => (
//     [airTravel.area_code, airTravel.month, airTravel.passengers]
// ))
const filterArea = area => {
      props.airTravels.filter(airTravel => (airTravel.area_code === area) ) 
};

const totalSales = (month) => {
    return props.airTravels.filter(airTravel => (airTravel.month === month))
         .reduce((acc, airTravel) => (acc + airTravel.sales), 0)
};

const totalPassengers = (month) => {
    
    return props.airTravels.filter(airTravel => (airTravel.month === month))
        .reduce((acc, airTravel) => (acc + airTravel.passengers), 0)
};

let monthNums = [1,2,3,4,5,6,7,8,9,10,11,12]


return (


<div>
    <table>
        <tbody>
        <tr>
            <td></td>
            <th scope="col">Month {monthNums[0]}</th>
            <th scope="col">Month {monthNums[1]}</th>
            <th scope="col">Month {monthNums[2]}</th>
            <th scope="col">Month {monthNums[3]}</th>
            <th scope="col">Month {monthNums[4]}</th>
            <th scope="col">Month {monthNums[5]}</th>
            <th scope="col">Month {monthNums[6]}</th>
            <th scope="col">Month {monthNums[7]}</th>
            <th scope="col">Month {monthNums[8]}</th>
            <th scope="col">Month {monthNums[9]}</th>
            <th scope="col">Month {monthNums[10]}</th>
            <th scope="col">Month {monthNums[11]}</th>
            <th scope="col">Q1</th>
            <th scope="col">Q2</th>
            <th scope="col">Q3</th>
            <th scope="col">Q4</th>

        </tr>
      
        <tr>
            
     
        </tr>
        <tr>
            <th scope="row">Passenger Count</th>
            {
                monthNums.map(num => (<td className="passenger_count">{totalPassengers(num)}</td>))
            }
            
        </tr>
        <tr>
            <th scope="row">Total Sales</th>
              {
                monthNums.map(num => (<td className="sales_total">{totalSales(num)}</td>))
            }

        </tr>
        <tr>
            <th scope="row">Average Ticket Price</th>
            {
                monthNums.map( num => (<td className="ticket_price">{Math.floor(totalSales(num)/totalPassengers(num))}</td>))
            }    
            </tr>
      {/* {
        props.airTravels.map(airTravel => <TableLI airTravel={airTravel} key={airTravel.id}/>)
        } */}
        </tbody>
    </table>
    
    
</div>

)
}

export default Table;