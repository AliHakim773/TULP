const express = require("express")
const { compileCode } = require("../controllers/compailer.controllers")
const router = express.Router()

router.post("/", compileCode)

module.exports = router
