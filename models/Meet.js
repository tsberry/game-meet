const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let LocationSchema = new Schema({
    address: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    }
});

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
        type: LocationSchema
    },
    instructions: {
        type: String,
        required: true
    },
    handle: {
        type: String
    },
    host: { type: Schema.Types.ObjectId, ref: 'User' },
    attendees: [{ type: Schema.Types.ObjectId, ref: "User" }],
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = mongoose.model('Meet', MeetSchema);