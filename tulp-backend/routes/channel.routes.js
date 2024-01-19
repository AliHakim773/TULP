const express = require("express")
const {
  addChannel,
  getClassChannels,
  getChannel,
  updateChannel,
  deleteChannel,
} = require("../controllers/channel.controllers")
const router = express.Router()

router.post("/", addChannel)
router.get("/:channelId", getChannel)
router.get("/class/:slug", getClassChannels)
router.patch("/:channelId", updateChannel)
router.delete("/:channelId", deleteChannel)

module.exports = router
