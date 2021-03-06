const db = require('../models');
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCEqwLravExN1A2V7cbCeqzt0NAUQZtU24',
  Promise: Promise
}
);

module.exports = {
  saveMeet: function (req, res) {
    db.Meet.create(req.body)
      .then((meet) => {
        db.User.findById(req.body.host)
          .then((user) => {
            user.hosting.push(meet._id);
            user.save()
              .then(() => res.json(meet));
          });
      })
      .catch((err) => res.status(400).json(err));
  },

  getMeet: function (req, res) {
    db.Meet.findById(req.params.id)
      .populate('host', 'username')
      .populate('attendees', 'username')
      .then((data) => {
        if (data) {
          res.json(data);
        } else {
          res.status(404).send({ success: false, message: 'No meet found' });
        }
      })
      .catch((err) => res.status(400).json(err));
  },

  getAll: function (req, res) {
    db.Meet.find({})
      .populate('host', 'username')
      .populate('attendees', 'username')
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err));
  },

  search: function (req, res) {
    const query = req.query;
    delete query.distance;
    db.Meet.find(query)
      .populate('host', 'username')
      .populate('attendees', 'username')
      .then((meets) => {
        if(req.query.online && req.query.distance) {
          const origin = `${req.query.address} ${req.query.city}, ${req.query.state}`;
          const destinations = meets.map((meet) => `${meet.address} ${meet.city}, ${meet.state}`);
          googleMapsClient.distanceMatrix(
            {
              origins: [origin],
              destinations: destinations,
              mode: 'driving'
            })
            .asPromise()
            .then((response) => {
              let returns = [];
              for (let i = 0; i < meets.length; i++) {
                if (response.json.rows[0].elements[i].distance.value < 1600 * req.query.distance) returns.push(meets[i]);
              }
              res.json(returns);
            })
            .catch((err) => res.status(400).json(err));
        }
        else {
          res.json(meets);
        }
      });
  }
};