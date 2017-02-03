import React from 'react'

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './WidgetStyles';

function renderGameList(games){
    const gameList = games.map(function(game){
        return <div>{game.name}</div>
    })
    return gameList
}

export default function EventTemplate(props) {
    return (
        <Paper style={styles.eventContainer}>
            <div><b>Name:</b> {props.event.name}</div>
            <div><b>Type:</b> {props.event.type}</div>
            <div><b>Location:</b> {props.event.location}</div>
            <div><b>Time:</b> {props.event.time.toLocaleString()}</div>
            <div><b>Games:</b>{renderGameList(props.event.games)}</div>
            <div style={{textAlign: 'right'}}>
                <RaisedButton label="RSVP" primary={true} />
            </div>
        </Paper>
    )
}