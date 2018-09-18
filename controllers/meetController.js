const db = require("../models");

module.exports = {
    saveMeet: function (req, res) {
        db.Meet.create({
            game: req.body.game,
            description: req.body.description,
            time: req.body.time,
            online: req.body.online,
            location: req.body.location,
            instructions: req.body.instructions,
            handle: req.body.handle,
            meetId: req.body.meetId,
            host: req.body._id
        })
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
    }
}