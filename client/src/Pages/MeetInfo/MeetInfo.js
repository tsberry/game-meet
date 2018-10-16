import React, { Component } from 'react';
import MeetDisplay from '../../components/MeetDisplay';
import API from '../../utils/API';

class MeetInfo extends Component {
  state = {
    meets: []
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.state !== prevProps.location.state) {
      API.getMeets()
        .then((res) => {
          this.setState({ meets: res.data });
        });
    }
  }

  componentDidMount() {
    if (this.props.location.state && this.props.location.state.meets) this.setState({ meets: this.props.location.state.meets });
    else {
      API.getMeets()
        .then((res) => {
          this.setState({ meets: res.data });
        });
    }
  }

  render() {
    return (
      <div>
        {this.state.meets.map((meet) =>
          <MeetDisplay
            game={meet.game}
            description={meet.description}
            time={meet.time}
            instructions={meet.instructions}
            online={meet.online}
            host={meet.host.username}
            handle={meet.online ? meet.handle : ''}
            address={!meet.online ? meet.address : ''}
            city={!meet.online ? meet.city : ''}
            state={!meet.online ? meet.state : ''}
            zip={!meet.online ? meet.zip : ''}
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