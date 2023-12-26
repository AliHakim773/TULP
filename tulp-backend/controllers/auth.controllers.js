const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

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
    const token = jwt.sign(
      {
        username,
        password,
        firstName,
        lastName,
        email,
        role: role || "student",
      },
      process.env.JWT_SECRET,
      { expiresIn: "30 days" }
    )

    res.status(200).send({ user, token })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

module.exports = {
  register,
}
