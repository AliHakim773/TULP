const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Class = require("../models/class.model")

const adminLogin = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await User.findOne({ username, role: "admin" })
    if (!user)
      return res.status(400).send({ message: "Wrong username or password" })

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword)
      return res.status(400).send({ message: "Wrong username or password" })

    const {
      password: hashedPassword,
      socialMediaLinks,
      enrolledClasses,
      classes,
      education,
      ...userDetails
    } = user.toJSON()

    const token = jwt.sign(
      {
        ...userDetails,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30 days" }
    )

    res.status(200).send({ user: userDetails, token })
  } catch (error) {
    res.status(500).send({ error })
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).send({ users })
  } catch (error) {
    res.status(500).send({ error })
  }
}

const deleteUsers = async (req, res) => {
  const { usersId } = req.body
  try {
    await User.deleteMany({ _id: { $in: usersId } })
    res.status(200).send({ message: "success" })
  } catch (error) {
    res.status(500).send({ error })
  }
}

const getClasss = async (req, res) => {
  try {
    const classes = await Class.find({}).populate({
      path: "owner",
      select: "username",
    })
    res.status(200).send({ classes })
  } catch (error) {
    res.status(500).send({ error })
  }
}

const deleteClasss = async (req, res) => {
  const { classesId } = req.body
  try {
    await Class.deleteMany({ _id: { $in: classesId } })
    res.status(200).send({ message: "success" })
  } catch (error) {
    res.status(500).send({ error })
  }
}

const getNumberOfUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).send({ numberOfUsers: users.length })
  } catch (error) {
    res.status(500).send({ error })
  }
}
const getNumberOfStudents = async (req, res) => {
  try {
    const users = await User.find({ role: "student" })
    res.status(200).send({ numberOfStudents: users.length })
  } catch (error) {
    res.status(500).send({ error })
  }
}

const getNumberOfInstructors = async (req, res) => {
  try {
    const users = await User.find({ role: "instructor" })
    res.status(200).send({ numberOfInstructors: users.length })
  } catch (error) {
    res.status(500).send({ error })
  }
}

module.exports = {
  adminLogin,
  getUsers,
  getClasss,
  deleteClasss,
  deleteUsers,
  getNumberOfUsers,
  getNumberOfStudents,
  getNumberOfInstructors,
}
