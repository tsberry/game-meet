import React, { Component } from "react";
import MeetDisplay from "../../components/MeetDisplay";
import JoinMeet from "../../components/JoinMeet";
import LeaveMeet from "../../components/LeaveMeet";
import API from "../../utils/API";
import AuthService from "../../components/AuthService";

const auth = new AuthService();

class SingleMeet extends Component {
    state = {
        meet: {},
        attendees: []
    }
    componentWillMount() {
        API.getMeet(this.props.match.params.id)
            .then(res => {
                this.setState({ meet: res.data, attendees: res.data.attendees });
            })
    }

    render() {
        return (
            <div>
                <MeetDisplay
                    game={this.state.meet.game}
                    description={this.state.meet.description}
                    time={this.state.meet.time}
                    instructions={this.state.meet.instructions}
                    host={this.state.meet.host ? this.state.meet.host.username : ""}
                    online={this.state.meet.online}
                    handle={this.state.meet.online ? this.state.meet.handle : ""}
                    location={!this.state.meet.online ? this.state.meet.location : ""}
                    attendees={this.state.attendees}
                    verbose={true}
                />
                {this.state.attendees.find(attendee => attendee._id === auth.getProfile().id) ?
                    <LeaveMeet
                        meetId={this.state.meet._id}
                    />
                    :
                    <JoinMeet
                        meetId={this.state.meet._id}
                    />
                }
            </div>
        );
    }
}

export default SingleMeet;