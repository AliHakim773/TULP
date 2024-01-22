const express = require("express")
const {
  compileCode,
  createRoom,
  deleteRoom,
  addParticipant,
  removeParticipant,
} = require("../controllers/compailer.controllers")
const router = express.Router()

router.post("/", compileCode)
router.post("/create-room", createRoom)
router.post("/delete-room", deleteRoom)
router.post("/add-participant", addParticipant)
router.post("/remove-participant", removeParticipant)

module.exports = router
