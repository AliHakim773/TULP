const express = require("express")
const {
  getChannelMessages,
  getUserByIdForChat,
  getDMMessages,
} = require("../controllers/message.controllers")
const router = express.Router()

router.get("/dm/:slug/:username", getDMMessages)
router.get("/:slug/:name", getChannelMessages)
router.get("/:id", getUserByIdForChat)

module.exports = router
