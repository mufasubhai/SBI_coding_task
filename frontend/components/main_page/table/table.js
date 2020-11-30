
import React, {useState, useEffect} from 'react';
import TableLI from './table_li';

const Table = (props) => {
// let airTravel = props.airTravel.map(airTravel => (
//     [airTravel.area_code, airTravel.month, airTravel.passengers]
// ))


return (


<div>
    <table>
        <tbody>
        <tr>
            <th>Area</th>
            <th>Month</th>
            <th>Passengers</th>
            <th>Quarter</th>

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