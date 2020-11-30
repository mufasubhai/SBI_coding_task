
import React, {useState, useEffect} from 'react';
import TableContainer from './table/table_container'

const MainPage = props => {


useEffect(() => {
    props.fetchAirTravels()
})    

let table = true;
function container() {
    if (table) {
        return <TableContainer/>
    }
}
    
    return (
            <div className="main_page_container">
                
                 {
                     container()
                 }
                    
                

            </div>
        )
}

// class MainPage extends React.Component {
//     constructor(props) {
//         super(props);

//     }

//     componentDidMount() {
//         this.props.fetchAirTravels()
//     }

//     render () {
//         return (
//             <div className="main_page_container">
//                 <span>
//                     THIS IS THE MAIN PAGE
//                 </span>

//             </div>
//         )
//     }
// }

export default MainPage