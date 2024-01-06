const express = require("express")
const { addPost } = require("../controllers/post.contollers")
const router = express.Router()

router.post("/", addPost)

module.exports = router
