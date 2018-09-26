import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class MeetDisplay extends Component {

    render() {
        return (
            <div>
                {this.props.verbose ? <h2>Game: {this.props.game}</h2> : <Link to={`/meets/${this.props.id}`}><h2>Game: {this.props.game}</h2></Link>}
                <p>Description: {this.props.description}</p>
                <p>Time: {moment(this.props.time).format("MMMM Do YYYY [at] h:mm A")}</p>
                <p>How to Join: {this.props.instructions}</p>
                <p>Hosted by: {this.props.host}</p>
                <p>{this.props.online ?
                    "Host Gamertag: " + this.props.handle 
                    : 
                    this.props.location ? "Event Location: " + this.props.location.address + " " + this.props.location.city + ", " + this.props.location.state + " " + this.props.location.zip : ""
                    }</p>
                {this.props.verbose ?
                    <div>
                        <h3>Attendees</h3>
                        <ul>
                            {this.props.attendees.map(attendee => <li key={attendee._id}>{attendee.username}</li>)}
                        </ul>
                    </div>
                    :
                    <p>{this.props.attendees.length} {this.props.attendees.length !== 1 ? "People" : "Person"} Attending this Event</p>}
            </div>
        );
    }
}

export default MeetDisplay;