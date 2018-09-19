import React, { Component } from "react";
import API from "../../utils/API";
import AuthService from "../AuthService";

const auth = new AuthService();

class JoinMeet extends Component {
    onClick = () => {
        API.joinMeet(this.props.meetId, auth.getProfile().id)
        .then(res => console.log(res));
    }

    render() {
        return (
            <button onClick={this.onClick} className="btn">Join this Meet</button>
        );
    }
}

export default JoinMeet;