const express = require("express")
const {
  adminLogin,
  getUsers,
  getClasss,
} = require("../controllers/auth.admin.controller")
const adminMiddleware = require("../middlewares/admin.middleware")
const authMiddleware = require("../middlewares/auth.middleware")
const router = express.Router()

router.post("/auth/login", adminLogin)
router.get("/user", authMiddleware, adminMiddleware, getUsers)
router.get("/class", authMiddleware, adminMiddleware, getClasss)

module.exports = router
