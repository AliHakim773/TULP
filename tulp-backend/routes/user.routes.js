const express = require("express")
const {
  editUser,
  getCurrentUser,
  getUserById,
  uploadImage,
  searchInstructors,
} = require("../controllers/user.controller")
const upload = require("../middlewares/multer.middleware")
const router = express.Router()

router.patch("/", editUser)
router.patch("/upload", upload.single("image"), uploadImage)
router.get("/:id", getUserById)
router.get("/", getCurrentUser)
router.post("/search", searchInstructors)

module.exports = router
