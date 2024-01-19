const { default: mongoose } = require("mongoose")

const MessageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: "SenderId is required",
    },
    content: {
      type: String,
      required: "Content is required",
    },
    files: [String],
  },
  {
    timestamps: true,
  }
)

module.exports = MessageSchema
