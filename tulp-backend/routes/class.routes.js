const express = require("express")
const { addClass } = require("../controllers/class.controllers")
const router = express.Router()

router.post("/", addClass)

module.exports = router
