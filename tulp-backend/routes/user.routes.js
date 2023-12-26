const express = require("express")
const editUser = require("../controllers/user.controller")
const router = express.Router()

router.post("/", editUser)

module.exports = router
