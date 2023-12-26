const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const login = async (rep, res) => {
  const { username, password } = rep.body

  // validation
  if (!username) return res.status(400).send({ error: "Username is required" })

  if (!password) return res.status(400).send({ error: "Password is required" })

  try {
    const user = await User.findOne({ username })
    if (!user)
      return res.status(400).send({ message: "Wrong username or password" })

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword)
      res.status(400).send({ message: "Wrong username or password" })

    const { password: hashedPassword, _id, ...userDetails } = user.toJSON()

    const token = jwt.sign(
      {
        ...userDetails,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30 days" }
    )

    res.status(200).send({ user: userDetails, token })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

const register = async (rep, res) => {
  const { username, password, firstName, lastName, email, role } = rep.body

  // validation
  if (!username) return res.status(400).send({ error: "Username is required" })

  if (!password) return res.status(400).send({ error: "Password is required" })

  if (!firstName)
    return res.status(400).send({ error: "First name is required" })

  if (!lastName) return res.status(400).send({ error: "Last name is required" })

  if (!email) return res.status(400).send({ error: "Email is required" })

  try {
    const uniqueNameCheck = await User.findOne({ username })
    if (uniqueNameCheck)
      return res.status(400).send({ error: "Username is taken" })

    const uniqueEmailCheck = await User.findOne({ email })
    if (uniqueEmailCheck)
      return res.status(400).send({ error: "Email is taken" })

    const user = await User.create({
      username,
      password,
      firstName,
      lastName,
      email,
      role: role || "student",
    })

    const { password: hashedPassword, _id, ...userDetails } = user.toJSON()

    const token = jwt.sign(
      {
        ...userDetails,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30 days" }
    )

    res.status(200).send({ user: userDetails, token })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

const refresh = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username })
    if (!user)
      return res.status(200).send({ message: "logged out", isLoggedIn: false })

    const { password: hashedPassword, _id, ...userDetails } = user.toJSON()

    const token = jwt.sign(
      {
        ...userDetails,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30 days" }
    )

    res.status(200).send({
      user: userDetails,
      isLoggedIn: true,
      token,
    })
  } catch (e) {
    return res.status(200).send({ message: "logged out", isLoggedIn: false })
  }
}

module.exports = {
  login,
  register,
  refresh,
}
