import React, { Component } from "react";
import "./EventForm.css";
import AuthService from "../AuthService";
import API from "../../utils/API";
import LocOrHandle from "../LocOrHandle";
const auth = new AuthService();

class EventForm extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            game: "",
            description: "",
            time: "",
            online: "online",
            instructions: "",
            handle: "",
            location: ""
        };
      }

    handleFormSubmit = event => {
        event.preventDefault();
        API.saveEvent(this.state.game, this.state.description, this.state.time, this.state.online, this.state.instructions, this.state.handle, this.state.location, auth.getProfile()._id)
            .then(res => this.props.onQuestion(res.data)).catch(err => alert(err.message));
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="game">Game Title</label>
                    <input
                        name="game"
                        type="text"
                        id="game"
                        onChange={this.handleChange} />
                    <label htmlFor="description">Describe your event</label>
                    <textarea
                        name="description"
                        type="text"
                        id="description"
                        onChange={this.handleChange} />
                    <label htmlFor="time">When is your event?</label>
                    <textarea
                        name="time"
                        type="text"
                        id="time"
                        onChange={this.handleChange} />
                    <label htmlFor="online">Is your event online or in person?</label>
                    <select
                        name="online"
                        onChange={this.handleChange}
                        defaultValue={this.state.online}
                    >
                        <option value="online">Online</option>
                        <option value="in person">In Person</option>
                    </select>
                    <label htmlFor="instructions">How do people join you?</label>
                    <textarea
                        name="instructions"
                        type="text"
                        id="instructions"
                        onChange={this.handleChange} />
                    <LocOrHandle online={this.state.online} handleChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}

export default EventForm;