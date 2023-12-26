const { default: mongoose } = require("mongoose")
const ClassFeedSchema = require("./classFeed.model")
const ScheduleSchema = require("./schedule.model")
const AssignmentSchema = require("./assignment.model")

const ClassSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: "a class needs to have an owner",
  },
  name: {
    type: String,
    required: "A class must have a name",
    minlength: [2, "A class name length must be more than 3 characters"],
    trim: true,
    lowercase: true,
  },
  description: {
    type: String,
    maxlength: [400, "Cant have a long description can we? max chars is 400"],
    trim: true,
  },
  logoUrl: {
    type: String,
    default: "uploads/defualt.png",
  },
  isPrivate: {
    type: Boolean,
    default: false,
  },
  instructors: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  students: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  classFeed: [ClassFeedSchema],
  schedule: [ScheduleSchema],
  assignments: [AssignmentSchema],
  channels: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Channel",
    },
  ],
})

const Class = mongoose.model("Class", ClassSchema)

module.exports = Class
