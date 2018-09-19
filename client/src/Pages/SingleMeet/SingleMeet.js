import React, { Component } from "react";
import MeetDisplay from "../../components/MeetDisplay";
import API from "../../utils/API";

class SingleMeet extends Component {
    state = {
        meet: {},
        attendees: []
    }
    componentWillMount() {
        API.getMeet(this.props.match.params.id)
        .then(res => {
            this.setState({meet: res.data, attendees: res.data.attendees});
        })
    }

    render() {
        console.log(this.state.meet);
        return (
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
        );
    }
}

export default SingleMeet;