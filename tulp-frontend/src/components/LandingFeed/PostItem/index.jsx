import React from "react"
import "./styles.css"
import Post from "../Post"

const PostItem = ({ post }) => {
  return (
    <div>
      <Post post={post} />
    </div>
  )
}

export default PostItem
