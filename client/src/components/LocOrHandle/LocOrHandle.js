import React, { Component } from "react";

class LocOrHandle extends Component {
    render() {
        console.log(this.props.online);
        const onlineBlock = <div>
            <label htmlFor="handle">What is your relevant handle or gamertag?</label>
            <input
                name="handle"
                type="text"
                className="form-control"
                id="handle"
                onChange={this.props.handleChange} />
        </div>;

        const inpersonBlock = <div>
            <label htmlFor="location">Where is your event located?</label>
            <input
                name="address"
                type="text"
                className="form-control"
                id="address"
                onChange={this.props.handleChange} />
            <input
                name="city"
                type="text"
                className="form-control"
                id="city"
                onChange={this.props.handleChange} />
            <input
                name="state"
                type="text"
                className="form-control"
                id="state"
                onChange={this.props.handleChange} />
            <input
                name="zip"
                type="text"
                className="form-control"
                id="zip"
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