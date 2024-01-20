const isUserInClass = require("../helpers/isUserInClass")
const DirectMessage = require("../models/directMessage.model")

const registerDMHandler = (io, socket, user) => {
  socket.on("dm:join-room", async (classId, userId, cb) => {
    try {
      const [user1, msg1] = await isUserInClass(user._id, classId)
      if (!user1) return cb("User 1 is not in class")
      const [user2, msg2] = await isUserInClass(userId, classId)
      if (!user2) return cb("User 2 is not in class")

      let dm = await DirectMessage.findOne({
        classId: classId,
        edges: { $all: [user._id, userId] },
      })
      if (!dm)
        dm = await DirectMessage.create({
          classId: classId,
          edges: [user._id, userId],
        })

      socket.join(dm._id)

      cb(`Joined Room ${dm._id}`)
    } catch (e) {
      cb(e)
    }
  })

  socket.on("dm:leave-room", async (classId, userId, cb) => {
    try {
      let dm = await DirectMessage.findOne({
        classId: classId,
        edges: { $all: [user._id, userId] },
      })

      if (dm) {
        socket.leave(dm._id)
        return cb("Left Room")
      }

      cb("Room doesnt exist")
    } catch (e) {
      cb(e)
    }
  })
}

module.exports = registerDMHandler
