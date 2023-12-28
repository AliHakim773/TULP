const express = require("express")
const {
  addChannel,
  getClassChannels,
  getChannel,
  updateChannel,
} = require("../controllers/channel.controllers")
const router = express.Router()

router.post("/", addChannel)
router.get("/:channelId", getChannel)
router.get("/class/:classId", getClassChannels)
router.patch("/:channelId", updateChannel)

module.exports = router
