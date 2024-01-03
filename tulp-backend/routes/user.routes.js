const express = require("express")
const {
  editUser,
  getCurrentUser,
  getUserById,
  uploadImage,
} = require("../controllers/user.controller")
const upload = require("../middlewares/multer.middleware")
const router = express.Router()

router.patch("/", editUser)
router.patch("/upload", upload.single("image"), uploadImage)
router.get("/:id", getUserById)
router.get("/", getCurrentUser)

module.exports = router
