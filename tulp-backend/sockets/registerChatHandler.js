const { sendMessage } = require("../controllers/message.controllers")
const isUserInClass = require("../helpers/isUserInClass")
const Channel = require("../models/channel.model")

const registerChatHandler = (io, socket, user) => {
  socket.on("channel:join-room", async (room, cb) => {
    const channel = await Channel.findById(room)
    if (!channel)
      return socket.emit("channel:join-room", false, "Channel doesnt exist")
    const [inClass, msg] = await isUserInClass(user._id, channel.classId)

    if (!inClass) return socket.emit("channel:join-room", false, "Not In Class")

    if (channel.readPermission === "all") {
      socket.join(room)
      return socket.emit("channel:join-room", true, "channel All")
    }
    if (channel.readPermission === "instructor") {
      if (user.role !== "instructor")
        return socket.emit("channel:join-room", false, "You Have No Access")

      socket.join(room)
      socket.emit("channel:join-room", true, "channel instructors")
    }
  })

  socket.on("channel:leave-room", (room, cb) => {
    socket.leave(room)
    socket.emit("channel:leave-room", room)
  })

  socket.on("channel:send-message", async (room, message, cb) => {
    const channel = await Channel.findById(room)
    if (!channel)
      return socket.emit("channel:send-message", false, "Channel doesnt exist")

    const [inClass, msg] = await isUserInClass(user._id, channel.classId)

    if (!inClass)
      return socket.emit("channel:send-message", false, "Not In Class")

    const isUserInRoom = socket.rooms.has(room)
    if (!isUserInRoom)
      return socket.emit(
        "channel:send-message",
        false,
        "You are not in the room"
      )

    if (channel.writePermission === "all") {
      const mes = await sendMessage(room, user._id, message)
      return socket.to(room).emit("channel:send-message", true, mes)
    }

    if (channel.writePermission === "instructor") {
      if (user.role !== "instructor")
        return socket.emit("channel:send-message", false, "You Have No Access")

      sendMessage(room, user._id, message)
      return socket.to(room).emit("channel:send-message", true, message)
    }
  })
}

module.exports = registerChatHandler
