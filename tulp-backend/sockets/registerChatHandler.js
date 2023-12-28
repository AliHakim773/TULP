const registerChatHandler = (io, socket) => {
  const joinRoom = (room, cb) => {
    socket.join(room)
    cb(`Joined ${room}`)
    socket.emit("chat:join-room", room)
  }

  socket.on("chat:join-room", joinRoom)
}

module.exports = registerChatHandler
