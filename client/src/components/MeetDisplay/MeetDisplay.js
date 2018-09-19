import React, { Component } from "react";

class MeetDisplay extends Component {

    render() {
        return (
            <div>
                <h2>{this.props.game}</h2>
                <p>{this.props.description}</p>
                <p>{this.props.time}</p>
                <p>{this.props.instructions}</p>
                <p>{this.props.host.username}</p>
                <p>{this.props.online ? this.props.handle : this.props.location}</p>
            </div>
        );
    }
}

export default MeetDisplay;