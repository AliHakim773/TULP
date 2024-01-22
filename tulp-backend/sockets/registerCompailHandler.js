const isUserInClass = require("../helpers/isUserInClass")
const DirectMessage = require("../models/directMessage.model")

const registerCompailHandler = (io, socket, user) => {
  socket.on("compaile:join-room", async (room, cb) => {})

  socket.on("compaile:leave-room", async (room, cb) => {})

  socket.on("compaile:get-output", async (classId, userId, message, cb) => {})
}

module.exports = registerCompailHandler
