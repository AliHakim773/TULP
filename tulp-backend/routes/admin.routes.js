const express = require("express")
const { adminLogin, getUsers } = require("../controllers/auth.admin.controller")
const adminMiddleware = require("../middlewares/admin.middleware")
const authMiddleware = require("../middlewares/auth.middleware")
const router = express.Router()

router.post("/auth/login", adminLogin)
router.get("/user", authMiddleware, adminMiddleware, getUsers)

module.exports = router
