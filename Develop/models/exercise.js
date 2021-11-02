const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exercises: [{
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: false
    },
    weight: {
      type: Number,
      required: false
    },
    reps: {
      type: Number,
      required: false
    },
    sets: {
      type: Number,
      required: false
    },
    distance: {
      type: Number,
      required: false
    }
  }],
  day: {
    type: Date,
    default: Date.now
  },
})

const exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = exercise;