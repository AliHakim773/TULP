const { default: mongoose } = require("mongoose")
const SubmissionSchema = require("./submission.model")

const AssignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: "title should be unique",
    required: "Assignments must have a title",
    minlength: [3, "Title length must be more than 3"],
    maxlength: [40, "Title length must be less than 40"],
  },
  slug: {
    type: String,
  },
  content: {
    type: String,
    maxlength: [400, "Can't be more than 400 chars"],
    requiered: "Feed content cant be empty",
  },
  dueDate: {
    type: String,
  },
  file: String,
  submissions: [SubmissionSchema],
})

AssignmentSchema.pre("save", function (next) {
  this.slug = this.title.trim().split(" ").join("-").toLowerCase()
  next()
})

const Assignment = mongoose.model("Assignment", AssignmentSchema)

module.exports = Assignment
