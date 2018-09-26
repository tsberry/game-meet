import React, { Component } from "react";
import LocOrHandle from "../LocOrHandle";

class SearchForm extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="game">Game Title</label>
                        <input
                            name="game"
                            type="text"
                            className="form-control"
                            id="game"
                            onChange={this.props.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input
                            name="time"
                            type="datetime-local"
                            className="form-control"
                            id="time"
                            onChange={this.props.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="online">Do you want in-person or online events?</label>
                        <select
                            name="online"
                            className="form-control"
                            onChange={this.props.handleChange}
                            defaultValue=""
                        >
                            <option value="">No Preference</option>
                            <option value="online">Online</option>
                            <option value="in person">In Person</option>
                        </select>
                    </div>
                    {this.props.online !== "" ? <LocOrHandle online={this.props.online} handleChange={this.props.handleChange} /> : ""}
                    <input
                        type="submit"
                        className="btn"
                        value="Search"
                    />
                </form>
            </div>
        );
    }
}

export default SearchForm;