const db = require("../models");

module.exports = {
    saveMeet: function (req, res) {
        db.Meet.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(400).json(err));
    },

    getMeet: function (req, res) {
        db.Meet.findOne({
            meetId: req.params.id
        })
            .populate("host", "username")
            .populate("attendees", "username")
            .then(data => res.json(data))
            .catch(err => res.status(400).json(err));
    },

    getAll: function (req, res) {
        db.Meet.find({})
            .populate("host", "username")
            .populate("attendees", "username")
            .then(data => res.json(data))
            .catch(err => res.status(400).json(err));
    }
}