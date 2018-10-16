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
  saveEvent: (game, description, time, online, instructions, handle, address, city, state, zip, id) => {
    let data = {
      game: game,
      description: description,
      time: time,
      instructions: instructions,
      host: id
    };
    if (online === 'online') {
      data.online = true;
      data.handle = handle;
    }
    else {
      data.online = false;
      data.address = address;
      data.city = city;
      data.state = state;
      data.zip = zip;
    }

    return axios.post('/api/meet', data);
  },
  getMeet: (id) => {
    return axios.get(`/api/meet/${id}`);
  },
  getMeets: () => {
    return axios.get('/api/meet');
  },
  search: (game, time, online, handle, address, city, state, zip, distance) => {
    let params = {};
    if (game !== '') params.game = game;
    if (time !== '') params.time = time;
    if (online !== '') {
      if (online === 'online') {
        params.online = true;
      }
      else {
        params.online = false;
        if (address !== '') params.address = address;
        if (city !== '') params.city = city;
        if (state !== '') params.state = state;
        if (zip !== '') params.zip = zip;
        if (distance !== '') params.distance = distance;
      }
    }
    let esc = encodeURIComponent;
    let query = Object.keys(params)
      .map((k) => esc(k) + '=' + esc(params[k]))
      .join('&');

    return axios.get(`/api/meet/search?${query}`);
  },
  joinMeet: (meetId, userId) => {
    return axios.post('/api/user/add', { meetId: meetId, userId: userId });
  },
  leaveMeet: (meetId, userId) => {
    return axios.delete(`/api/user/remove/${userId}/${meetId}`);
  }
};
