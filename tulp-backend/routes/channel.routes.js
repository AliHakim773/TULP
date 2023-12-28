const express = require("express")
const { addChannel } = require("../controllers/channel.controllers")
const router = express.Router()

router.post("/", addChannel)

module.exports = router
