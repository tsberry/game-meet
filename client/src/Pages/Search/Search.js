import React, { Component } from "react";
import SearchForm from "../../components/SearchForm";
import API from "../../utils/API";

class Search extends Component {
    state = {
        game: "",
            time: "",
            online: "",
            handle: "",
            location: ""
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.search(this.state.game, this.state.time, this.state.online, this.state.handle, this.state.location)
            .then(res => {
                this.props.history.push("/meets", {meets: res.data});
            }).catch(err => {console.log(err)});
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
                <SearchForm handleFormSubmit={this.handleFormSubmit} handleChange={this.handleChange} online={this.state.online} />
            </div>
        );
    }
}

export default Search;