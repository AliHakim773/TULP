const { default: mongoose } = require("mongoose")

const ClassFeedSchema = new mongoose.Schema({
  content: {
    type: String,
    maxlength: [400, "Can't be more than 400 chars"],
    requiered: "Feed content cant be empty",
  },
  sender: {
    type: mongoose.Types.ObjectId,
    requiered: "Sernder ID is requiered",
  },
  files: [
    {
      type: String,
    },
  ],
})

module.exports = ClassFeedSchema
