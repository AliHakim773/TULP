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
    unique: "Class name must be unique",
    minlength: [2, "A class name length must be more than 3 characters"],
    trim: true,
    lowercase: true,
  },
  slug: {
    type: String,
    slug: "name",
    unique: true,
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
  assignments: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Assignment",
    },
  ],
  channels: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Channel",
    },
  ],
})

ClassSchema.pre("save", function (next) {
  this.slug = this.name.split(" ").join("-")
  next()
})

// ClassSchema.path("assignments").validate(function (value) {
//   const names = value.map((assignment) => assignment.name)
//   return new Set(names).size === names.length
// }, "Duplicate assignment names found within the same document.")

const Class = mongoose.model("Class", ClassSchema)

module.exports = Class
