const express = require("express")
const {
  addPost,
  getPost,
  addComment,
} = require("../controllers/post.contollers")
const router = express.Router()

router.post("/", addPost)
router.get("/", getPost)
router.post("/comment", addComment)

module.exports = router
