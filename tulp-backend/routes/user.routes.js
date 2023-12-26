const express = require("express")
const editUser = require("../controllers/user.controller")
const upload = require("../middlewares/multer.middleware")
const router = express.Router()

router.post("/", upload.single("image"), editUser)

module.exports = router
