const { default: mongoose } = require("mongoose")

const ScheduleSchema = new mongoose.Schema({
  title: {
    type: String,
    requiered: "title cant be empty",
  },
  startTime: {
    type: String,
    requiered: "You need to specify a start time",
  },
  endTime: {
    type: String,
    requiered: "You need to specify a end time",
  },
  description: {
    type: String,
  },
})

module.exports = ScheduleSchema
