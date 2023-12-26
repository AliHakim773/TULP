const express = require("express")
const {
  editUser,
  getCurrentUser,
  getUserById,
} = require("../controllers/user.controller")
const upload = require("../middlewares/multer.middleware")
const router = express.Router()

router.put("/", upload.single("image"), editUser)
router.get("/:id", getUserById)
router.get("/", getCurrentUser)

module.exports = router
