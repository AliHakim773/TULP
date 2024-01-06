const express = require("express")
const { addPost, getPost } = require("../controllers/post.contollers")
const router = express.Router()

router.post("/", addPost)
router.get("/", getPost)

module.exports = router
