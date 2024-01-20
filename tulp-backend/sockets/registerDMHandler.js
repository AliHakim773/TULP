const isUserInClass = require("../helpers/isUserInClass")
const DirectMessage = require("../models/directMessage.model")

const registerDMHandler = (io, socket, user) => {
  socket.on("dm:join-room", async (classId, userId, cb) => {
    const [user1, msg1] = await isUserInClass(user._id, classId)
    if (!user1) return cb("User 1 is not in class")
    console.log(await isUserInClass(userId, classId))
    const [user2, msg2] = await isUserInClass(userId, classId)
    if (!user2) return cb("User 2 is not in class")

    let dm = await DirectMessage.findOne({
      edges: { $all: [user._id, userId] },
    })
    if (!dm) dm = await DirectMessage.create({ edges: [user._id, userId] })

    socket.join(dm._id)

    cb(`Joined Room ${dm._id}`)
  })
}

module.exports = registerDMHandler
