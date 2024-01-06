const Post = require("../models/post.model")

const addPost = async (req, res) => {
  const id = req.user._id
  const { content } = req.body

  try {
    const post = await Post.create({
      user: id,
      content,
    })
    return res.status(200).send({ post })
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const getPost = async (req, res) => {
  try {
    const posts = await Post.find().populate({
      path: "user",
      select: "_id username imageUrl",
    })
    return res.status(200).send({ posts })
  } catch (error) {
    return res.status(500).send({ error })
  }
}

module.exports = {
  addPost,
  getPost,
}
