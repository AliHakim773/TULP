const Class = require("../models/class.model")
const roleChecker = require("../helpers/roleChecker")
const populateUsersArray = require("../helpers/populateUsersArray")
const Channel = require("../models/channel.model")
const User = require("../models/user.model")

const addClass = async (req, res) => {
  const id = req.user._id
  const { name, description, instructors } = req.body

  if (!name) return res.status(400).send({ message: "Class name is required" })

  try {
    if (!instructors && instructors?.length !== 0) {
      const instructorsCheck = await roleChecker(instructors, "instructor")
      if (!instructorsCheck.result) {
        const users = await populateUsersArray(instructorsCheck.rejected)
        return res.status(400).send({
          message: "some users dont have instructor role",
          users,
        })
      }
    }

    const classObject = await Class.create({
      owner: id,
      name,
      description,
      instructors: instructors?.map((id) => id),
    })

    const user = await User.findById(id)
    user.classes.push(classObject._id)
    await user.save()

    const channel1 = new Channel({
      classId: classObject._id,
      name: "General",
      readPermission: "all",
      writePermission: "all",
    })
    const channel2 = new Channel({
      classId: classObject._id,
      name: "Staff",
      readPermission: "instructor",
      writePermission: "instructor",
    })

    const channel3 = new Channel({
      classId: classObject._id,
      name: "Announcements",
      readPermission: "all",
      writePermission: "instructor",
    })

    const channels = await Channel.create([channel1, channel2, channel3])

    channels.forEach((channel) => {
      classObject.channels.push(channel)
    })

    await classObject.save()

    res
      .status(200)
      .send({ class: classObject, message: "Class created successfully" })
  } catch (e) {
    res.status(500).send({ message: `something went wrong: ${e}` })
  }
}

const getClassesIn = async (req, res) => {
  const id = req.user._id
  try {
    const classes = await Class.find({
      $or: [{ owner: id }, { instructors: id }],
    })
      .select("owner name description _id")
      .populate({ path: "owner", select: "username _id" })

    res.status(200).send({ classes })
  } catch (error) {
    res.status(500).send({ error })
  }
}

// TODO: Check Auth
const searchClass = async (req, res) => {
  const payload = req.body.payload.trim()
  const regex = new RegExp(payload, "i")
  try {
    const result = await Class.find({
      name: regex,
    })
      .limit(4)
      .populate({ path: "owner", select: "username" })

    return res.status(200).send({ result })
  } catch (e) {
    res.status(500).send({ message: `something went wrong: ${e}` })
  }
}

const addSchedule = async (req, res) => {
  const { slug, title, startTime, endTime, description } = req.body
  try {
    const classObject = await Class.findOne({ slug })

    const schedule = await classObject.schedule.create({
      title,
      startTime,
      endTime,
      description,
    })

    classObject.schedule.push(schedule)
    await classObject.save()

    res.status(200).send({ schedule })
  } catch (error) {
    res.status(500).send({ error })
  }
}

const getClassInstructors = async (req, res) => {
  const { slug } = req.params

  try {
    const classObject = await Class.findOne({ slug }).populate({
      path: "instructors",
      select: "username _id email imageUrl firstName lastName",
    })
    res.status(200).send({ instructors: classObject.instructors })
  } catch (error) {
    res.status(500).send({ error })
  }
}

const addClassInstructor = async (req, res) => {
  const { slug } = req.params
  const { instructorId } = req.body
  try {
    const classObject = await Class.findOne({ slug })
    if (!classObject.instructors.includes(instructorId)) {
      classObject.instructors.push(instructorId)
      await classObject.save()
      res.status(200).send({ message: "Instructor added successfully" })
    } else {
      res.status(200).send({ message: "Instructor already in class" })
    }
  } catch (error) {
    res.status(500).send({ error })
  }
}

const getClassProfile = async (req, res) => {
  const { slug } = req.params
  try {
    const classObject = await Class.findOne({ slug })
    res
      .status(200)
      .send({ name: classObject.name, description: classObject.description })
  } catch (error) {
    res.status(500).send({ error })
  }
}

const editClassProfile = async (req, res) => {
  const { slug } = req.params
  const { name, description } = req.body
  try {
    const classObject = await Class.findOneAndUpdate(
      { slug },
      { name, description },
      { new: true }
    )
    res.status(200).send({ slug: classObject.slug })
  } catch (error) {
    res.status(500).send({ error })
  }
}

module.exports = {
  addClass,
  searchClass,
  getClassesIn,
  addSchedule,
  getClassInstructors,
  getClassProfile,
  editClassProfile,
  addClassInstructor,
}
