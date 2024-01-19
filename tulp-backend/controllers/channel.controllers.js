const Channel = require("../models/channel.model")
const Class = require("../models/class.model")

const addChannel = async (req, res) => {
  const { classId, name, readPermission, writePermission } = req.body

  if (!name)
    return res.status(400).send({ message: "Channel name is required" })
  if (!classId)
    return res.status(400).send({ message: "ClassId name is required" })

  try {
    const classObject = await Class.findById(classId)

    if (classObject.channels.some((ass) => ass.name === name)) {
      return res.status(400).send({ message: "Name already exist" })
    }

    const channel = await Channel.create({
      classId,
      name,
      readPermission,
      writePermission,
    })

    classObject.channels.push(channel._id)
    await classObject.save()

    res.status(201).send(channel)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getClassChannels = async (req, res) => {
  const { slug } = req.params
  const { _id, role } = req.user
  try {
    const classObject = await Class.findOne({ slug })
      .populate({
        path: "owner",
        select: "username _id imageUrl",
      })
      .populate({
        path: "instructors",
        select: "username _id imageUrl",
      })
      .populate({
        path: "students",
        select: "username _id imageUrl",
      })
    if (!classObject) {
      return res.status(404).send({ message: "Class Not Found" })
    }
    const channels = await Channel.find({ classId: classObject })
    if (!channels) {
      return res.status(404).send({ message: "Channel Not Found" })
    }
    const users = []
    if (!classObject.owner.equals(_id)) {
      users.push(classObject.owner)
    }
    classObject.instructors.map((i) => {
      if (!i.equals(_id)) users.push(i)
    })
    classObject.students.map((i) => {
      if (!i.equals(_id)) users.push(i)
    })

    let filteredChannels = []
    if (role === "student") {
      channels.map((c) => {
        if (c.readPermission === "all") filteredChannels.push(c)
      })
    } else {
      filteredChannels = channels
    }

    const result = {
      channels: filteredChannels,
      users,
    }
    return res.status(200).send({ ...result })
  } catch (error) {
    res.status(500).send(error)
  }
}

// TODO: check read permissions
const getChannel = async (req, res) => {
  const { channelId } = req.params
  try {
    const channel = await Channel.findById(channelId)
    res.status(200).send(channel)
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateChannel = async (req, res) => {
  const { channelId } = req.params
  const { name, readPermission, writePermission } = req.body
  try {
    const channel = await Channel.findByIdAndUpdate(
      channelId,
      {
        name,
        readPermission,
        writePermission,
      },
      { new: true }
    )
    res.status(200).send(channel)
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteChannel = async (req, res) => {
  const { channelId } = req.params
  try {
    const channel = await Channel.findByIdAndDelete(channelId)

    const classObject = await Class.findById(channel.classId)
    classObject.channels.pull(channel._id)

    await classObject.save()

    res.status(200).send(channel)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  addChannel,
  getClassChannels,
  getChannel,
  updateChannel,
  deleteChannel,
}
