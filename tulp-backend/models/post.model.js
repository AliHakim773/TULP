const { default: mongoose } = require("mongoose")
const CommentSchema = require("./comment.model")

const PostSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      require: "Cant have an empty Post",
    },
    likes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [CommentSchema],
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.model("Post", PostSchema)

module.exports = Post
