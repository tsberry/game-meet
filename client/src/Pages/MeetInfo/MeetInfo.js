import React, { Component } from "react";
import MeetDisplay from "../../components/MeetDisplay";
import API from "../../utils/API";

class MeetInfo extends Component {
    state = {
        meets: []
    }

    componentDidMount() {
        API.getMeets()
        .then(res => {
            this.setState({ meets: res.data});
            console.log(this.state.meets);
        })
    }

    render() {
        return (
            <div>
                {this.state.meets.map(meet => 
                    <MeetDisplay
                        game={meet.game}
                        description={meet.description}
                        time={meet.time}
                        instructions={meet.instructions}
                        online={meet.online}
                        host={meet.host.username}
                        handle={meet.online ? meet.handle : ""}
                        location={!meet.online ? meet.location : ""}
                        attendees={meet.attendees ? meet.attendees : []}
                        verbose={false}
                        id={meet._id}
                        key={meet._id}
                    />
                )}
            </div>
        );
    }
}

export default MeetInfo;