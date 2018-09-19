import React, { Component } from "react";
import API from "../../utils/API";
import AuthService from "../AuthService";

const auth = new AuthService();

class LeaveMeet extends Component {
    onClick = () => {
        console.log(this.props.meetId);
        console.log(auth.getProfile().id);
        API.leaveMeet(this.props.meetId, auth.getProfile().id)
        .then(res => console.log(res))
        .catch(err => console.log(err.response.data));
    }

    render() {
        return (
            <button onClick={this.onClick} className="btn">Leave this Meet</button>
        );
    }
}

export default LeaveMeet;