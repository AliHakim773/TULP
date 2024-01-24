const express = require("express")
const { adminLogin } = require("../controllers/auth.admin.controller")
const router = express.Router()

router.post("/auth/login", adminLogin)

module.exports = router
