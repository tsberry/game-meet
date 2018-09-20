import React, { Component } from "react";
import MeetDisplay from "../../components/MeetDisplay";
import MeetButton from "../../components/MeetButton";
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

    onButton = data => {
        this.setState({ meet: data, attendees: data.attendees });
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
                    id={this.state.meet._id}
                />

                <MeetButton
                    meetId={this.state.meet._id}
                    userId={auth.getProfile().id}
                    which={this.state.attendees.find(attendee => attendee._id === auth.getProfile().id) ? "leave" : "join"}
                    onButton={this.onButton}
                />

                <button className="btn" onClick={() => this.props.history.goBack()}>Back to Meets</button>
            </div>
        );
    }
}

export default SingleMeet;