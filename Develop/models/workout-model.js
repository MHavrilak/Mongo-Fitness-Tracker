const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: {
      type: Array,
  },
  totalDuration: {
      type: Number,
  }

  
});

const workout = mongoose.model("Workout", WorkoutSchema);

module.exports = workout;