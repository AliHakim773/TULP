const { default: mongoose } = require("mongoose")
const MessageSchema = require("./message.model")

const DirectMessageSchema = new mongoose.Schema({
  classId: {
    type: mongoose.Types.ObjectId,
    ref: "Class",
  },
  edges: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  messages: [MessageSchema],
})

const DirectMessage = mongoose.model("DirectMessage", DirectMessageSchema)

module.exports = DirectMessage
