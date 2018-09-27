const db = require("../models");

module.exports = {
    saveMeet: function (req, res) {
        db.Meet.create(req.body)
            .then(meet => {
                db.User.findById(req.body.host)
                .then(user => {
                    user.hosting.push(meet._id);
                    user.save()
                    .then(updatedUser => res.json(meet));
                })
            })
            .catch(err => res.status(400).json(err));
    },

    getMeet: function (req, res) {
        db.Meet.findById(req.params.id)
            .populate("host", "username")
            .populate("attendees", "username")
            .then(data => {
                if (data) {
                    res.json(data);
                } else {
                    res.status(404).send({ success: false, message: 'No meet found' });
                }
            })
            .catch(err => res.status(400).json(err));
    },

    getAll: function (req, res) {
        db.Meet.find({})
            .populate("host", "username")
            .populate("attendees", "username")
            .then(data => res.json(data))
            .catch(err => res.status(400).json(err));
    },

    search: function (req, res) {
        console.log(req.query)
        db.Meet.find(req.query)
            .populate("host", "username")
            .populate("attendees", "username")
            .then(data => {
                if (data) {
                    res.json(data);
                } else {
                    res.status(404).send({ success: false, message: 'No meet found' });
                }
            })
            .catch(err => res.status(400).json(err));
    }
}