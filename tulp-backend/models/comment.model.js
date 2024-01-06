const { default: mongoose } = require("mongoose")

const CommentSchema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    require: "Cant have an empty Comment",
  },
  likes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
})

module.exports = CommentSchema
