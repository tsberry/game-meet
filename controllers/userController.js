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
        .populate({
            path: "attending",
            populate: {
                path: "host",
                select: "username"
            }
        })
        .populate({
            path: "hosting",
            populate: {
                path: "host",
                select: "username"
            }
        })
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
                        console.log(user);
                        console.log(meet);
                        const inMeetArray = meet.attendees.some(function (ids) {
                            return ids.equals(user._id);
                        });
                        const inUserArray = user.attending.some(function (ids) {
                            return ids.equals(meet._id);
                        });
                        if(!inMeetArray) meet.attendees.push(user);
                        if(!inUserArray) user.attending.push(meet);
                        meet.save()
                            .then(updatedMeet => {
                                user.save()
                                    .then(updatedUser => {
                                        updatedMeet
                                        .populate("host")
                                        .populate("attendees")
                                        .execPopulate()
                                        .then(data => res.json(data))
                                        .catch(err => res.status(400).json(err));
                                    });
                            })
                            .catch(err => res.status(400).json(err));
                    })
                    .catch(err => res.status(400).json(err));
            })
            .catch(err => res.status(400).json(err));
    },

    removeAttendee: function (req, res) {
        db.User.findById(req.params.userId)
            .then(user => {
                db.Meet.findById(req.params.meetId)
                    .then(meet => {
                        meet.attendees.remove(user);
                        user.attending.remove(meet);
                        meet.save()
                            .then(updatedMeet => {
                                user.save()
                                    .then(updatedUser => {
                                        updatedMeet
                                        .populate("host")
                                        .populate("attendees")
                                        .execPopulate()
                                        .then(data => res.json(data))
                                        .catch(err => res.status(400).json(err));
                                    });
                            })
                            .catch(err => res.status(400).json(err));
                    })
                    .catch(err => res.status(400).json(err));
            })
            .catch(err => res.status(400).json(err));
    }
}