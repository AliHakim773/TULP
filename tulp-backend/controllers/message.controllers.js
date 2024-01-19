const Channel = require("../models/channel.model")

const sendMessage = async (channelId, senderId, content) => {
  const message = {
    senderId,
    content,
  }
  try {
    const channel = await Channel.findById(channelId)
    channel.messages.push(message)
    await channel.save()

    return { message }
  } catch (error) {
    return { error }
  }
}

module.exports = { sendMessage }
