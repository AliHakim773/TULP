const Channel = require("../models/channel.model")
const MessageSchema = require("../models/message.model")

const sendMessage = async (reciverId, senderId, content) => {
  const message = new MessageSchema({
    senderId,
    content,
  })

  try {
    const channel = Channel.findById(reciverId)
    channel.messages.push(message)
    await channel.save()

    return { message }
  } catch (error) {
    return { error }
  }
}

module.exports = { sendMessage }
