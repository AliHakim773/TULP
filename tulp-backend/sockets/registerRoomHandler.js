const isUserInClass = require("../helpers/isUserInClass")
const Class = require("../models/class.model")

const registerRoomHandler = (io, socket, user) => {
  socket.on("room:join-room", async (slug, cb) => {
    const classObject = await Class.findOne({ slug })
    if (!classObject) return
    const [inClass, msg] = await isUserInClass(user._id, classObject._id)

    if (!inClass) return

    socket.join(classObject._id.toString())
  })

  socket.on("room:leave-room", async (slug, cb) => {
    const classObject = await Class.findOne({ slug })
    socket.leave(classObject._id.toString())
  })

  socket.on("room:update-participants", async (slug, cb) => {
    const classObject = await Class.findOne({ slug })
    socket
      .to(classObject._id.toString())
      .emit("room:update-participants", classObject.participants)
  })

  socket.on("room:toggle-participants", async (slug, username, value, cb) => {
    const classObject = await Class.findOne({ slug })
    socket
      .to(classObject._id.toString())
      .emit("room:toggle-participants", username, value)
  })

  socket.on("room:create", async (slug, cb) => {
    const classObject = await Class.findOne({ slug })
    socket.to(classObject._id.toString()).emit("room:create", classObject.room)
  })

  socket.on("room:get-output", async (slug, output, cb) => {
    const classObject = await Class.findOne({ slug })
    socket.to(classObject._id.toString()).emit("room:get-output", output)
  })
}

module.exports = registerRoomHandler
