
import React, {useState, useEffect} from 'react';
import TableLI from './table_li';

let sortedPass = 1;
let sortedPrice = 1;
let sortedSales = 1;
let areaIdx = 0;
let airTravels;
const allAreas = ["All Areas", "Area 1", "Area 2", "Area 3", "Area 4"]
const currentArea = allAreas[areaIdx];
const months = {
    1:"January", 
    2:"February",
    3:"March",
    4:"May",
    5:"April",
    6:"June",
    7:"July",
    8:"August",
    9:"September",
    10:"October",
    11:"November",
    12:"December",
    }

let monthNums = [1,2,3,4,5,6,7,8,9,10,11,12]

const Table = (props) => {
    airTravels = props.airTravels;
        
    const modalActions = (airTravelsFiltered) => {
        props.setCurrentAirTravels(airTravelsFiltered);
        props.openModal('edit_form_data');
    }

    const filterAirTravelsByMonth = (month) => (
        airTravels.filter((airTravel) => (airTravel.month === month))
    )

      const totalSales = (month) => {
          
          return airTravels.filter(airTravel => (airTravel.month === month))
              .reduce((acc, airTravel) => (acc + airTravel.sales), 0)
      };
  
      const totalPassengers = (month) => {
          
          return airTravels.filter(airTravel => (airTravel.month === month))
              .reduce((acc, airTravel) => (acc + airTravel.passengers), 0)
      };
  
      const averagePrice = (month) => {
          
          return (totalSales(month)/totalPassengers(month)).toFixed(2);
      }




    // filter area function
    const filterAreas = () => {
        areaIdx = (areaIdx + 1) % 4;
        console.log(areaIdx)
        
        if (areaIdx === 0) {
            airTravels = props.airTravels;
        } else {
            airTravels = props.airTravels.filter(airTravel => (airTravel.area_code === areaIdx+1))
            
        }
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
            <th className="area" onClick={() => filterAreas()}>{currentArea}</th>


            {
                monthNums.map(num => (<th scope="col" onClick={()=> modalActions(filterAirTravelsByMonth(monthNums[num-1]))}>{months[monthNums[num-1]]}</th>))
                
            }

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
                    monthNums.map(num => (<td key={num} className="passenger_count">{totalPassengers(num)}</td>))
                }
            
            
        </tr>
        <tr>
            <th scope="row" onClick={()=> sortAverageSales()}>Total Sales</th>
            
                {
                    monthNums.map(num => (<td key={num} className="sales_total">{totalSales(num)}</td>))
                }
            

        </tr>
        <tr>
            <th scope="row" onClick={()=> sortAverageTicketPrice()}>Average Ticket Price</th>
            
                {
                    monthNums.map( num => (<td key={num} className="ticket_price">{averagePrice(num)}</td>))
                }        
            
            </tr>
     
        </tbody>
    </table>
    
    
</div>

)
}

export default Table;