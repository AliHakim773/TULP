const { default: mongoose } = require("mongoose")

const ClassFeedSchema = new mongoose.Schema({
  title: {
    type: String,
    requiered: "Title is requiered",
  },
  content: {
    type: String,
    maxlength: [800, "Can't be more than 800 chars"],
    requiered: "Feed content cant be empty",
  },
  file: String,
})

module.exports = ClassFeedSchema
