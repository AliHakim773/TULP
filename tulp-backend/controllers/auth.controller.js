const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const register = async (rep, res) => {
  const { username, password, firstName, lastName, email, role } = rep.body
  if (!username || !password || !firstName || !lastName || !email) {
    res.status(400).send({ message: "Something is missing" })
  }

  try {
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
    res.status(500).send({ error: e })
  }
}
