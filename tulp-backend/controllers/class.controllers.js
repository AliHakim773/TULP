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

    return res
      .status(200)
      .send({ class: classObject, message: "Class created successfully" })
  } catch (e) {
    return res.status(500).send({ message: `something went wrong: ${e}` })
  }
}

const getClass = async (req, res) => {
  const slug = req.params.slug
  try {
    const classObject = await Class.findOne({ slug })
      .populate({
        path: "owner",
        select: "_id username firstName lastName imageUrl",
      })
      .populate({
        path: "instructors",
        select: "username _id firstName lastName imageUrl",
      })
      .populate({
        path: "students",
        select: "username _id firstName lastName imageUrl",
      })

    return res.status(200).send({ class: classObject })
  } catch (error) {
    return res.status(500).send({ error })
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

    return res.status(200).send({ classes })
  } catch (error) {
    return res.status(500).send({ error })
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
    return res.status(500).send({ message: `something went wrong: ${e}` })
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

    return res.status(200).send({ schedule })
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const getClassInstructors = async (req, res) => {
  const { slug } = req.params

  try {
    const classObject = await Class.findOne({ slug }).populate({
      path: "instructors",
      select: "username _id email imageUrl firstName lastName",
    })
    return res.status(200).send({ instructors: classObject.instructors })
  } catch (error) {
    return res.status(500).send({ error })
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
      return res.status(200).send({ message: "Instructor added successfully" })
    } else {
      return res.status(200).send({ message: "Instructor already in class" })
    }
  } catch (error) {
    return res.status(500).send({ error })
  }
}
const removeClassInstructor = async (req, res) => {
  const { slug } = req.params
  const { instructorId } = req.body
  try {
    const classObject = await Class.findOne({ slug })
    if (classObject.instructors.includes(instructorId)) {
      classObject.instructors.pop(instructorId)
      await classObject.save()
      return res
        .status(200)
        .send({ message: "Instructor removed successfully" })
    } else {
      return res.status(200).send({ message: "Instructor not in class" })
    }
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const getClassProfile = async (req, res) => {
  const { slug } = req.params
  try {
    const classObject = await Class.findOne({ slug })
    return res
      .status(200)
      .send({ name: classObject.name, description: classObject.description })
  } catch (error) {
    return res.status(500).send({ error })
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
    return res.status(200).send({ slug: classObject.slug })
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const getStudentss = async (req, res) => {
  const { slug } = req.params
  try {
    const classObject = await Class.findOne({ slug }).populate({
      path: "students",
      select: "-password",
    })
    if (!classObject) {
      return res.status(404).send({ message: "Class not found" })
    }

    return res.status(200).send({ students: classObject.students })
  } catch (error) {
    return res.status(500).send({ message: `something went wrong` })
  }
}

const removeClassStudent = async (req, res) => {
  const { slug } = req.params
  const { studentId } = req.body
  try {
    const classObject = await Class.findOne({ slug })
    if (classObject.students.includes(studentId)) {
      classObject.students.pop(studentId)
      await classObject.save()
      return res.status(200).send({ message: "Student removed successfully" })
    } else {
      return res.status(200).send({ message: "Student not in class" })
    }
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const requestToJoin = async (req, res) => {
  const { classId } = req.body
  const { _id } = req.user
  try {
    const classObject = await Class.findById(classId)
    if (!classObject) {
      return res.status(404).send({ message: "Class not found" })
    }
    if (classObject.students.includes(_id)) {
      return res.status(400).send({ message: "You are already in this class" })
    }
    classObject.studentRequests.push(_id)
    await classObject.save()

    return res.status(200).send({ message: "Request sent successfully" })
  } catch (error) {
    return res.status(500).send({ message: `something went wrong` })
  }
}

const getRequests = async (req, res) => {
  const { slug } = req.params
  try {
    const classObject = await Class.findOne({ slug }).populate({
      path: "studentRequests",
      select: "-password",
    })
    if (!classObject) {
      return res.status(404).send({ message: "Class not found" })
    }

    return res.status(200).send({ requests: classObject.studentRequests })
  } catch (error) {
    return res.status(500).send({ message: `something went wrong` })
  }
}

const acceptRequest = async (req, res) => {
  const { slug } = req.params
  const { _id } = req.body
  try {
    const classObject = await Class.findOne({ slug })
    if (!classObject) {
      return res.status(404).send({ message: "Class not found" })
    }
    if (!classObject.studentRequests.includes(_id)) {
      return res.status(404).send({ message: "User not found" })
    }

    classObject.students.push(_id)
    classObject.studentRequests.pop(_id)

    await classObject.save()

    return res.status(200).send({ message: "Request accepted successfully" })
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const rejectRequest = async (req, res) => {
  const { slug } = req.params
  const { _id } = req.body
  try {
    const classObject = await Class.findOne({ slug })
    if (!classObject) {
      return res.status(404).send({ message: "Class not found" })
    }
    if (!classObject.studentRequests.includes(_id)) {
      return res.status(404).send({ message: "User not found" })
    }

    classObject.studentRequests.pop(_id)

    await classObject.save()

    return res.status(200).send({ message: "Request rejected successfully" })
  } catch (error) {
    return res.status(500).send({ message: error })
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
  removeClassInstructor,
  getClass,
  requestToJoin,
  getRequests,
  acceptRequest,
  rejectRequest,
  getStudentss,
  removeClassStudent,
}
