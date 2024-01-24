const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const adminLogin = async (req, res) => {
  const { username, password } = req.body
  try {
    console.log({ username, password })
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

module.exports = { adminLogin, getUsers }
