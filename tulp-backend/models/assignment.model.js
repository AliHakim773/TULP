const { default: mongoose } = require("mongoose")
const SubmissionSchema = require("./submission.model")

const AssignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Assignments must have a title",
    minlength: [3, "Title length must be more than 3"],
    maxlength: [40, "Title length must be less than 40"],
  },
  content: {
    type: String,
    maxlength: [400, "Can't be more than 400 chars"],
    requiered: "Feed content cant be empty",
  },
  sender: {
    type: mongoose.Types.ObjectId,
    requiered: "Sernder ID is requiered",
  },
  dueDate: {
    type: String,
    // TODO: add datetime formating
  },
  files: [
    {
      type: String,
    },
  ],
  submissions: [SubmissionSchema],
})

module.exports = AssignmentSchema
