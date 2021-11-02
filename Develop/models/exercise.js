const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;