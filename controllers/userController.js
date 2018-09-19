const db = require("../models");
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

module.exports = {
    login: function (req, res) {
        db.User.findOne({
            email: req.body.email
        }).then(user => {
            user.verifyPassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {
                    let token = jwt.sign({ id: user._id, email: user.email }, 'all sorts of code up in here', { expiresIn: 129600 }); // Sigining the token
                    res.json({ success: true, message: "Token Issued!", token: token, user: user });
                } else {
                    res.status(401).json({ success: false, message: "Authentication failed. Wrong password." });
                }
            });
        }).catch(err => res.status(404).json({ success: false, message: "User not found", error: err }));
    },

    signup: function (req, res) {
        db.User.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(400).json(err));
    },

    getUser: function (req, res) {
        db.User.findById(req.params.id)
        .populate("meets")
        .then(data => {
            if (data) {
                res.json(data);
            } else {
                res.status(404).send({ success: false, message: 'No user found' });
            }
        }).catch(err => res.status(400).send(err));
    },

    addAttendee: function (req, res) {
        db.User.findById(req.body.userId)
            .then(user => {
                db.Meet.findById(req.body.meetId)
                    .then(meet => {
                        const inMeetArray = meet.attendees.some(function (ids) {
                            return ids.equals(user._id);
                        });
                        const inUserArray = user.meets.some(function (ids) {
                            return ids.equals(meet._id);
                        });
                        if(!inMeetArray) meet.attendees.push(user);
                        if(!inUserArray) user.meets.push(meet);
                        meet.save()
                            .then(updatedMeet => {
                                user.save()
                                    .then(updatedUser => res.json(updatedMeet));
                            })
                            .catch(err => res.status(400).json(err));
                    })
                    .catch(err => res.status(400).json(err));
            })
            .catch(err => res.status(400).json(err));
    },

    removeAttendee: function (req, res) {
        db.User.findById(req.body.userId)
            .then(user => {
                db.Meet.findById(req.body.meetId)
                    .then(meet => {
                        meet.attendees.remove(user);
                        user.meets.remove(meet);
                        meet.save()
                            .then(updatedMeet => {
                                user.save()
                                    .then(updatedUser => res.json(updatedMeet));
                            })
                            .catch(err => res.status(400).json(err));
                    })
                    .catch(err => res.status(400).json(err));
            })
            .catch(err => res.status(400).json(err));
    }
}