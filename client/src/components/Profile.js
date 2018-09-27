import React, { Component } from 'react';
import withAuth from './withAuth';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import MeetDisplay from "../components/MeetDisplay";

class Profile extends Component {

    state = {
        username: "",
        email: "",
        hosting: [],
        attending: []
    };

    componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
            this.setState({
                username: res.data.username,
                email: res.data.email,
                hosting: res.data.hosting,
                attending: res.data.attending
            })
        });
    }

    render() {
        return (
            <div className="container Profile">
                <h1>Hello, {this.state.username}</h1>
                <h2>Hosted Meets</h2>
                <div>
                    {this.state.hosting.map(meet =>
                        <MeetDisplay
                            game={meet.game}
                            description={meet.description}
                            time={meet.time}
                            instructions={meet.instructions}
                            online={meet.online}
                            host={meet.host.username}
                            handle={meet.online ? meet.handle : ""}
                            address={!meet.online ? meet.address : ""}
                            city={!meet.online ? meet.city : ""}
                            state={!meet.online ? meet.state : ""}
                            zip={!meet.online ? meet.zip : ""}
                            attendees={meet.attendees ? meet.attendees : []}
                            verbose={false}
                            id={meet._id}
                            key={meet._id}
                        />
                    )}
                </div>
                <h2>Meets Attending</h2>
                <div>
                    {this.state.attending.map(meet =>
                        <MeetDisplay
                            game={meet.game}
                            description={meet.description}
                            time={meet.time}
                            instructions={meet.instructions}
                            online={meet.online}
                            host={meet.host.username}
                            handle={meet.online ? meet.handle : ""}
                            address={!meet.online ? meet.address : ""}
                            city={!meet.online ? meet.city : ""}
                            state={!meet.online ? meet.state : ""}
                            zip={!meet.online ? meet.zip : ""}
                            attendees={meet.attendees ? meet.attendees : []}
                            verbose={false}
                            id={meet._id}
                            key={meet._id}
                        />
                    )}
                </div>
                <Link to="/">Go home</Link>
            </div>
        )
    }
}

export default withAuth(Profile);