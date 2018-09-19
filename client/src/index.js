import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import CreateEvent from "./Pages/CreateEvent";
import MeetInfo from "./Pages/MeetInfo";
import SingleMeet from "./Pages/SingleMeet";

// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/create" component={CreateEvent} />
            <Route exact path="/meets" component={MeetInfo} />
            <Route exact path="/meets/:id" component={SingleMeet} />
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
