const Channel = require("../models/channel.model")
const Class = require("../models/class.model")
const User = require("../models/user.model")

const sendMessage = async (channelId, senderId, content) => {
  const message = {
    senderId,
    content,
  }
  try {
    const channel = await Channel.findById(channelId)
    channel.messages.push(message)
    await channel.save()
    return { message: channel.messages[channel.messages.length - 1] }
  } catch (error) {
    return { error }
  }
}

// const getChannelMessages = async (req, res) => {
//   const { id } = req.params
//   try {
//     const channel = await Channel.findById(id)
//     if (!channel) return res.status(404).send({ message: "Channel not found" })

//     return res.status(200).send({ channel: channel })
//   } catch (error) {
//     res.status(500).send({ message: error })
//   }
// }

const getChannelMessages = async (req, res) => {
  const { slug, name } = req.params
  try {
    const classObject = await Class.findOne({ slug })
    const channel = await Channel.findOne({
      name,
      classId: classObject._id,
    }).populate({
      path: "messages",
      populate: {
        path: "senderId",
        model: "User",
        select: "username imageUrl _id created_at",
      },
    })
    if (!channel) return res.status(404).send({ message: "Channel not found" })

    return res.status(200).send({ channel: channel })
  } catch (error) {
    res.status(500).send({ message: error })
  }
}

const getUserByIdForChat = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findById(id).select(
      "username imageUrl _id created_at"
    )

    return res.status(200).send({ user })
  } catch (error) {
    res.status(500).send({ error })
  }
}

module.exports = { sendMessage, getChannelMessages, getUserByIdForChat }
