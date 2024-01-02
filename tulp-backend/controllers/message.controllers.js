const Channel = require("../models/channel.model")

const sendMessage = async (reciverId, senderId, content) => {
  const message = {
    senderId,
    content,
  }
  // TODO: a lot of missing validation such as checking if the user can send
  //todo---- msg into the channel by getting all allowed ids from the channel
  console.log(message)
  try {
    const channel = await Channel.findById(reciverId)
    channel.messages.push(message)
    await channel.save()

    return { message }
  } catch (error) {
    return { error }
  }
}

module.exports = { sendMessage }
