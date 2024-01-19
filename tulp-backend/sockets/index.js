const io = require("./index.js")
const registerChatHandler = require("./registerChatHandler")
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const onConnection = async (socket) => {
  console.log("User connected with id: ", socket.id)
  const bearerToken = socket.handshake.headers.token
  if (bearerToken) {
    const token = bearerToken.split(" ")[1]
    decode = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: decode._id }).select("-password")
    registerChatHandler(io, socket, user)
  }
  socket.on("disconnect", () => console.log("User disconnected"))
}

module.exports = onConnection
