import React, {useState, useEffect} from 'react';



const TableLI = (props) => {
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

    function quarter(month) {
        if (between(1,3,month)) {
            return 1
        } else if ((between(4,6,month))) {
            return 2
        } else if ((between(7,9, month))) {
            return 3
        } else {
            return 4
        }
    }

    function between(a, b, num) {
        return (num >= a && num <= b)
    }


    
return (     
        <tr>
            <td>{props.airTravel.area_code}</td>
            <td>{months[props.airTravel.month]}</td>
            <td>{props.airTravel.passengers}</td>
            <td>{quarter(props.airTravel.month)}</td>
        </tr>    
    )
}


export default TableLI