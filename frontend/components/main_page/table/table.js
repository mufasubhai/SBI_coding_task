
import React, {useState, useEffect} from 'react';
import TableLI from './table_li';

let sortedPass = 1;
let sortedPrice = 1;
let sortedSales = 1;
let currentArea = "All Areas"

let monthNums = [1,2,3,4,5,6,7,8,9,10,11,12]

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

    const averagePrice = (month) => {
        return (totalSales(month)/totalPassengers(month)).toFixed(2);
    }

    // sort functions
    const sortTotalPassengers = () => {
        if (sortedPass === 1) {
    
            monthNums = monthNums.sort((a, b) => (totalPassengers(a) - totalPassengers(b)))
            console.log(monthNums)
            sortedPass = 2;
        } else if (sortedPass === 2) {
            monthNums = monthNums.sort((a, b) => (totalPassengers(b) - totalPassengers(a)))
            sortedPass = 3;
        } else {
            monthNums = [1,2,3,4,5,6,7,8,9,10,11,12];
            sortedPass = 1;
        }
    }

const sortAverageTicketPrice = () => {
     if (sortedSales === 1) {
            monthNums = monthNums.sort((a, b) => (totalSales(a) - totalSales(b)))
            console.log(monthNums)
            sortedSales = 2;
        } else if (sortedSales === 2) {
            monthNums = monthNums.sort((a, b) => (totalSales(b) - totalSales(a)))
            sortedSales = 3;
        } else {
            monthNums = [1,2,3,4,5,6,7,8,9,10,11,12];
            sortedSales = 1;
        }
    }


const sortAverageSales = () => {
     if (sortedPrice === 1) {
            monthNums = monthNums.sort((a, b) => (averagePrice(a) - averagePrice(b)))
            console.log(monthNums)
            sortedPrice = 2;
        } else if (sortedPrice === 2) {
            monthNums = monthNums.sort((a, b) => (averagePrice(b) - averagePrice(a)))
            sortedPrice = 3;
        } else {
            monthNums = [1,2,3,4,5,6,7,8,9,10,11,12];
            sortedPrice = 1;
        }
    }


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
            <th className="sort_header" scope="row" onClick={() => sortTotalPassengers()}>Passenger Count</th>
            {
                monthNums.map(num => (<td className="passenger_count">{totalPassengers(num)}</td>))
            }
            
        </tr>
        <tr>
            <th scope="row" onClick={()=> sortAverageSales()}>Total Sales</th>
              {
                monthNums.map(num => (<td className="sales_total">{totalSales(num)}</td>))
            }

        </tr>
        <tr>
            <th scope="row" onClick={()=> sortAverageTicketPrice()}>Average Ticket Price</th>
            {
                monthNums.map( num => (<td className="ticket_price">{averagePrice(num)}</td>))
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