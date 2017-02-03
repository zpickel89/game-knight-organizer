import React, {Component} from 'react';

import UpcomingEvents from '../widgets/UpcomingEvents';
import './Home.css';

class HomePage extends Component {
    render(){
        return(
        <div>
            <div>
                <UpcomingEvents />
            </div>
        </div>
        
        );
    }
}

export default HomePage;
