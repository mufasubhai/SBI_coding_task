
import React, {useState, useEffect} from 'react';
import TableLI from './table_li.jsx';

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
  
      const totalSalesQuarter = (m1, m2, m3) => {
          
          return (totalSales(m1) + totalSales(m2) + totalSales(m3))
      };
  
      const totalPassengers = (month) => {
          
          return airTravels.filter(airTravel => (airTravel.month === month))
              .reduce((acc, airTravel) => (acc + airTravel.passengers), 0)
      };
  
      const averagePrice = (month) => {
          
          return (totalSales(month)/totalPassengers(month)).toFixed(2);
      }

      const averagePriceQuarter = (m1, m2, m3) => {
          return ((totalSales(m1)/totalPassengers(m1) + totalSales(m2)/totalPassengers(m2) + totalSales(m3)/totalPassengers(m3)) / 3).toFixed(2)
         
}
        const passengerCountQuarter = (m1, m2, m3) => {
            return (totalPassengers(m1) + totalPassengers(m2) + totalPassengers(m3) )
        }


    const numberWithCommas =(x) => {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
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



    <table className="main_table">
        <tbody className="table_body">
        <tr>
            <th className="area" onClick={() => filterAreas()}>{currentArea}</th>


            {
                monthNums.map(num => (<th scope="col" key={num-1} onClick={()=> modalActions(filterAirTravelsByMonth(monthNums[num-1]))}>{months[monthNums[num-1]]}</th>))
                
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
                    monthNums.map(num => (<td key={num} className="passenger_count">{numberWithCommas(totalPassengers(num))}</td>))
                }
            
            <td className="total">{numberWithCommas(passengerCountQuarter(1,2,3))}</td>    
            <td className="total">{numberWithCommas(passengerCountQuarter(4,5,6))}</td>    
            <td className="total">{numberWithCommas(passengerCountQuarter(7,8,9))}</td>    
            <td className="total">{numberWithCommas(passengerCountQuarter(10,11,12))}</td>    
        </tr>
        <tr>
            <th scope="row" onClick={()=> sortAverageSales()}>Total Sales</th>
            
                {
                    monthNums.map(num => (<td key={num} className="sales_total">${numberWithCommas(totalSales(num))}</td>))
                }
            <td className="total">${numberWithCommas(totalSalesQuarter(1,2,3))}</td>    
            <td className="total">${numberWithCommas(totalSalesQuarter(4,5,6))}</td>    
            <td className="total">${numberWithCommas(totalSalesQuarter(7,8,9))}</td>    
            <td className="total">${numberWithCommas(totalSalesQuarter(10,11,12))}</td>    
           

        </tr>
        <tr>
            <th scope="row" onClick={()=> sortAverageTicketPrice()}>Average Ticket Price</th>
            
                {
                    monthNums.map( num => (<td key={num} className="ticket_price">${averagePrice(num)}</td>))
                }        
            <td className="total">${averagePriceQuarter(1,2,3)}</td>    
            <td className="total">${averagePriceQuarter(4,5,6)}</td>    
            <td className="total">${averagePriceQuarter(7,8,9)}</td>    
            <td className="total">${averagePriceQuarter(10,11,12)}</td>    
            
        </tr>
            
        </tbody>
    </table>
    
    


)
}

export default Table;