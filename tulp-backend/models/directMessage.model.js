const { default: mongoose } = require("mongoose")

const DirectMessageSchema = new mongoose.Schema({
  edges: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  ],
  messages: [MessageSchema],
})

ChannelSchema.pre("save", function (next) {
  this.name = this.name.trim().split(" ").join("-").toLowerCase()
  next()
})

const DirectMessage = mongoose.model("DM", DirectMessageSchema)

module.exports = DirectMessage
