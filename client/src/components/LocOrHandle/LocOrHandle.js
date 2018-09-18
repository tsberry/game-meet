import React, { Component } from "react";

class LocOrHandle extends Component {
    render() {
        console.log(this.props.online);
        const onlineBlock = <div>
            <label htmlFor="handle">What is your relevant handle or gamertag?</label>
            <input
                name="handle"
                type="text"
                id="handle"
                onChange={this.props.handleChange} />
        </div>;

        const inpersonBlock = <div>
            <label htmlFor="location">Where is your event located?</label>
            <textarea
                name="location"
                type="text"
                id="location"
                onChange={this.props.handleChange} />
        </div>;

        return (
            <div>
                {this.props.online === "online" ?
                    onlineBlock : inpersonBlock
                }
            </div>
        );
    }
}

export default LocOrHandle;