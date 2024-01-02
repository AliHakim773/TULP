const io = require("./index.js")
const registerChatHandler = require("./registerChatHandler")

const onConnection = (socket) => {
  console.log("User connected with id: ", socket.id)
  const token = socket.handshake.headers.token
  console.log("token: ", token)
  socket.on("disconnect", () => console.log("User disconnected"))

  registerChatHandler(io, socket)
}

module.exports = onConnection
