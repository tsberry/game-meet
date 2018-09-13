const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MeetSchema = new Schema({
    game: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    time: {
      type: Date,
      required: true
    },
    online: {
        type: Boolean,
        required: true
    },
    location: {
        type: String
    },
    instructions: {
        type: String,
        required: true
    },
    handle: {
        type: String
    },
    meetId: {
        type: Number,
        required: true,
        unique: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = mongoose.model('Meet', MeetSchema);