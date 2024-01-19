const express = require("express")
const {
  getChannelMessages,
  getUserByIdForChat,
} = require("../controllers/message.controllers")
const router = express.Router()

router.get("/:slug/:name", getChannelMessages)
router.get("/:id", getUserByIdForChat)

module.exports = router
