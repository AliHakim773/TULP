const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]
  if (!token) res.status(403).send("Forbidden")
  else {
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({ username: decode.username }).select(
      "-password"
    )
    req.user = user
    next()
  }
}

module.exports = authMiddleware
