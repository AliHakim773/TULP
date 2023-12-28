const Channel = require("../models/channel.model")
const Class = require("../models/class.model")

const addChannel = async (req, res) => {
  const { classId, name, readPermission, writePermission } = req.body

  if (!name)
    return res.status(400).send({ message: "Channel name is required" })
  if (!classId)
    return res.status(400).send({ message: "ClassId name is required" })

  try {
    const channel = await Channel.create({
      classId,
      name,
      readPermission,
      writePermission,
    })

    const classObject = await Class.findById(classId)
    classObject.channels.push(channel._id)
    await classObject.save()

    res.status(201).send(channel)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getClassChannels = async (req, res) => {
  const { classId } = req.params
  try {
    const channels = await Channel.find({ classId })
    res.status(200).send(channels)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  addChannel,
  getClassChannels,
}
