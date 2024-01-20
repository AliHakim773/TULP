const isUserInClass = require("../helpers/isUserInClass")
const Channel = require("../models/channel.model")
const Class = require("../models/class.model")
const DirectMessage = require("../models/directMessage.model")
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

// TODO: in class middleware
const getDMMessages = async (req, res) => {
  const { slug, username } = req.params
  const { _id } = req.user
  try {
    const classObject = await Class.findOne({ slug })
    const user = await User.findOne({ username })

    if (!user) return res.status(404).send({ message: "User Not Found" })
    console.log({ classId: classObject._id, edges: [user._id, _id] })
    const messages = await DirectMessage.findOne({
      classId: classObject._id,
      edges: { $all: [user._id, _id] },
    }).populate({
      path: "messages",
      populate: {
        path: "senderId",
        model: "User",
        select: "username imageUrl _id created_at",
      },
    })

    if (!messages)
      return res.status(404).send({ message: "Messages not found" })

    return res.status(200).send({ dms: messages })
  } catch (error) {
    res.status(500).send({ message: error })
  }
}

module.exports = {
  sendMessage,
  getChannelMessages,
  getUserByIdForChat,
  getDMMessages,
}
