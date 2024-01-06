const express = require("express")
const {
  addPost,
  getPost,
  addComment,
  postLike,
} = require("../controllers/post.contollers")
const router = express.Router()

router.post("/", addPost)
router.get("/", getPost)
router.post("/comment", addComment)
router.post("/like", postLike)

module.exports = router
