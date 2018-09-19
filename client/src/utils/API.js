import axios from 'axios';
export default {
    // Gets a single user by id
    getUser: (id) => {
        return axios.get(`/api/user/${id}`);
    },
    // sign up a user to our service
    signUpUser: (username, email, password) => {
        return axios.post('api/user/signup', { username: username, email: email, password: password });
    },
    saveEvent: (game, description, time, online, instructions, handle, location, id) => {
        let data = {
            game: game,
            description: description,
            time: time,
            instructions: instructions,
            host: id
        }
        if (online === "online") {
            data.online = true;
            data.handle = handle
        }
        else {
            data.online = false;
            data.location = location;
        }

        return axios.post('/api/meet', data);
    },
    getMeet: id => {
        return axios.get(`/api/meet/${id}`);
    },
    getMeets: () => {
        return axios.get('/api/meet');
    }
};
