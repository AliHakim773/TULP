const express = require("express")
const { register, login, refresh } = require("../controllers/auth.controllers")
const authMiddleware = require("../middlewares/auth.middleware")
const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/", authMiddleware, refresh)

module.exports = router
