const express = require("express")
const {
  adminLogin,
  getUsers,
  getClasss,
  deleteClasss,
  deleteUsers,
  getNumberOfUsers,
  getNumberOfStudents,
  getAvgNumberOfStudents,
  getNumberOfInstructors,
  getNumberOfClasses,
} = require("../controllers/auth.admin.controller")
const adminMiddleware = require("../middlewares/admin.middleware")
const authMiddleware = require("../middlewares/auth.middleware")
const router = express.Router()

router.post("/auth/login", adminLogin)
router.get(
  "/students/count",
  authMiddleware,
  adminMiddleware,
  getNumberOfStudents
)
router.get(
  "/students/avg",
  authMiddleware,
  adminMiddleware,
  getAvgNumberOfStudents
)
router.get(
  "/instructors/count",
  authMiddleware,
  adminMiddleware,
  getNumberOfInstructors
)
router.get("/user/count", authMiddleware, adminMiddleware, getNumberOfUsers)
router.get("/user", authMiddleware, adminMiddleware, getUsers)
router.delete("/user", authMiddleware, adminMiddleware, deleteUsers)
router.get("/class/count", authMiddleware, adminMiddleware, getNumberOfClasses)
router.get("/class", authMiddleware, adminMiddleware, getClasss)
router.delete("/class", authMiddleware, adminMiddleware, deleteClasss)

module.exports = router
