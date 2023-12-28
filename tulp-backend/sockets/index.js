const registerChatHandler = require("./registerChatHandler")

const onConnection = (socket) => {
  const token = socket.handshake.token
  console.log(token)
  socket.on("disconnect", () => console.log("User disconnected"))

  registerChatHandler(io, socket)
}

module.exports = onConnection
