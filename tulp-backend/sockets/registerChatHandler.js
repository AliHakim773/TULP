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

  socket.on("chat:join-room", joinRoom)
  socket.on("chat:leave-room", leaveRoom)
}

module.exports = registerChatHandler
