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
    const posts = await Post.find()
      .populate({
        path: "user",
        select: "_id username imageUrl",
      })
      .populate({
        path: "comments.user",
        select: "_id username imageUrl",
      })
    return res.status(200).send({ posts })
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const addComment = async (req, res) => {
  const id = req.user.id
  const { postId, content } = req.body
  const comment = {
    user: id,
    content,
  }
  try {
    const post = await Post.findById(postId)
    post.comments.push(comment)
    await post.save()

    return res.status(200).send({ post })
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const postLike = async (req, res) => {
  const id = req.user._id
  const { postId, commentId } = req.body
  try {
    const post = await Post.findById(postId)
    if (commentId) {
      const comment = post.comments.id(commentId)

      if (comment.likes.includes(id)) {
        comment.likes.pop(id)
        await post.save()
      } else {
        comment.likes.push(id)
        await post.save()
      }
      return res.status(200).send({ likes: comment.likes })
    } else {
      if (post.likes.includes(id)) {
        post.likes.pop(id)
        await post.save()
      } else {
        post.likes.push(id)
        await post.save()
      }
      return res.status(200).send({ likes: post.likes })
    }
  } catch (error) {
    return res.status(500).send({ error: error })
  }
}

module.exports = {
  addPost,
  getPost,
  addComment,
  postLike,
}
