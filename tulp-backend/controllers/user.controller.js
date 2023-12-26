const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const editUser = async (req, res) => {
  const id = req.user._id
  const {
    username,
    password,
    email,
    firstName,
    lastName,
    birth,
    imageUrl,
    aboutMe,
  } = req.body
  const user = await User.findOne({ _id: id })

  user.username = username || user.username
  user.firstName = firstName || user.firstName

  await user.save()

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

module.exports = editUser
