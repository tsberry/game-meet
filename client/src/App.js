import React, { Component } from 'react';
import './App.css';
// import withAuth from './components/withAuth';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// Our Components
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import CreateEvent from "./Pages/CreateEvent";
import MeetInfo from "./Pages/MeetInfo";
import SingleMeet from "./Pages/SingleMeet";
import Home from "./Pages/Home";
import Search from "./Pages/Search";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <div className="container">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/create" component={CreateEvent} />
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/meets" component={MeetInfo} />
                        <Route exact path="/meets/:id" component={SingleMeet} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
