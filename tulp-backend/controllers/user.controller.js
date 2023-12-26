const jwt = require("jsonwebtoken")
const fs = require("fs").promises
const User = require("../models/user.model")

const editUser = async (req, res) => {
  const id = req.user._id
  const { username, password, email, firstName, lastName, birth, aboutMe } =
    req.body

  const image = req.file
  const imageUrl = image ? image.path : ""

  const user = await User.findOne({ _id: id })
  const oldImageUrl = user.imageUrl

  user.username = username || user.username
  user.password = password || user.password
  user.email = email || user.email
  user.firstName = firstName || user.firstName
  user.lastName = lastName || user.lastName
  user.birth = birth || user.birth
  user.aboutMe = aboutMe || user.aboutMe
  user.imageUrl = imageUrl || user.imageUrl

  await user.save()

  if (oldImageUrl && oldImageUrl !== "uploads/defualt.png") {
    await fs.unlink(oldImageUrl)
  }

  const { password: hashedPassword, ...userDetails } = user.toJSON()
  const token = jwt.sign(
    {
      ...userDetails,
    },
    process.env.JWT_SECRET,
    { expiresIn: "30 days" }
  )

  res.status(200).send({ user: userDetails, token })
  try {
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id })
    const { password: hashedPassword, ...userDetails } = user.toJSON()

    res.status(200).send({ user: userDetails })
  } catch (e) {
    res.status(500).send({ message: "Something went wrong: " + e })
  }
}

module.exports = { editUser, getCurrentUser }
