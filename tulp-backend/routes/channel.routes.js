const express = require("express")
const {
  addChannel,
  getClassChannels,
  getChannel,
} = require("../controllers/channel.controllers")
const router = express.Router()

router.post("/", addChannel)
router.get("/:channelId", getChannel)
router.get("/class/:classId", getClassChannels)

module.exports = router
