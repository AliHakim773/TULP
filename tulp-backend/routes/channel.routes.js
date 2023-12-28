const express = require("express")
const {
  addChannel,
  getClassChannels,
} = require("../controllers/channel.controllers")
const router = express.Router()

router.post("/", addChannel)
router.get("/:classId", getClassChannels)

module.exports = router
