const { sendMessage } = require("../controllers/message.controllers")

const registerChatHandler = (io, socket) => {
  const joinRoom = (room, cb) => {
    socket.join(room)
    cb(`Joined ${room}`)
    socket.emit("chat:join-room", room)
  }

  const leaveRoom = (room, cb) => {
    socket.leave(room)
    cb(`Left ${room}`)
    socket.emit("chat:leave-room", room)
  }

  const sendChatMessage = (room, senderId, message) => {
    console.log("in sendChatMessage")
    sendMessage(room, senderId, message)
    socket.to(room).emit("chat:send-message", message)
  }

  socket.on("chat:join-room", joinRoom)
  socket.on("chat:leave-room", leaveRoom)
  socket.on("chat:send-message", sendChatMessage)
}

module.exports = registerChatHandler
