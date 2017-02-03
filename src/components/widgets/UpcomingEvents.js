import React, {Component} from 'react';

import styles from './WidgetStyles';
import Paper from 'material-ui/Paper';
import EventTemplate from './EventTemplate';

import events from '../../api/eventApi';

class UpcomingEvents extends Component {
    constructor(props){
        super(props)

        this.renderEvents = this.renderEvents.bind(this);
    }

    renderEvents(){
        const eventDetails = events.map(function(event){
            return <EventTemplate event={event} />
        })
        return eventDetails;
    }

    render() {
        return(
            <div style={styles.upcomingEventsContainer}>
                <h2 style={styles.widgetHeader}>Upcoming Events</h2>
                {this.renderEvents()}                
            </div>
        )
    }
}

export default UpcomingEvents;