import React, { Component } from "react";

class MeetDisplay extends Component {

    render() {
        return (
            <div>
                <h2>Game: {this.props.game}</h2>
                <p>Description: {this.props.description}</p>
                <p>Time: {this.props.time}</p>
                <p>How to Join: {this.props.instructions}</p>
                <p>Hosted by: {this.props.host}</p>
                <p>{this.props.online ? "Host Gamertag: " + this.props.handle : "Event Location: " + this.props.location}</p>
                {this.props.verbose ?
                    <div>
                        <h3>Attendees</h3>
                        <ul>
                            {this.props.attendees.map(attendee => <li key={attendee._id}>{attendee.username}</li>)}
                        </ul>
                    </div>
                    :
                    <p>{this.props.attendees.length} People Attending this Event</p>}
            </div>
        );
    }
}

export default MeetDisplay;