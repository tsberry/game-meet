import React, { Component } from "react";
import API from "../../utils/API";

class MeetButton extends Component {
    onClick = () => {
        console.log(this.props.meetId);
        console.log(this.props.userId);
        let func;
        this.props.which === "leave" ? func = API.leaveMeet : func = API.joinMeet;
        func(this.props.meetId, this.props.userId)
        .then(res => this.props.onButton(res.data))
        .catch(err => console.log(err.response.data));
    }

    render() {
        return (
            <button onClick={this.onClick} className="btn">{this.props.which==="leave" ? "Leave" : "Join"} this Meet</button>
        );
    }
}

export default MeetButton;