
import React from 'react';


class MainPage extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchAirTravels()
    }

    render () {
        return (
            <div className="main_page_container">
                <span>
                    THIS IS THE MAIN PAGE
                </span>

            </div>
        )
    }
}

export default MainPage