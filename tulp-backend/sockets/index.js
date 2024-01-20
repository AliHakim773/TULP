const io = require("./index.js")
const registerChatHandler = require("./registerChatHandler")
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
const registerDMHandler = require("./registerDMHandler.js")

const onConnection = async (socket) => {
  const bearerToken = socket.handshake.query.token
  if (bearerToken) {
    const token = bearerToken.split(" ")[1]
    try {
      decode = jwt.verify(token, process.env.JWT_SECRET)
      const user = await User.findOne({ _id: decode._id }).select("-password")
      registerChatHandler(io, socket, user)
      registerDMHandler(io, socket, user)
    } catch (e) {
      return
    }
  }
}

module.exports = onConnection
