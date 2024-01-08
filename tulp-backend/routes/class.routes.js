const express = require("express")
const { addClass, searchClass } = require("../controllers/class.controllers")
const router = express.Router()

router.post("/", addClass)
router.post("/search", searchClass)

module.exports = router
