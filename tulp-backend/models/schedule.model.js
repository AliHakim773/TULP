const { default: mongoose } = require("mongoose")

const ScheduleSchema = new mongoose.Schema({
  content: {
    type: String,
    maxlength: [200, "Can't be more than 200 chars"],
    requiered: "Feed content cant be empty",
  },
  startTime: {
    type: String,
    requiered: "You need to specify a start time",
  },
  endTime: {
    type: String,
    requiered: "You need to specify a end time",
  },
})

module.exports = ScheduleSchema
