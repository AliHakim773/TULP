import React from "react"
import "./styles.css"
import Post from "../Post"

const PostItem = ({ post }) => {
  return (
    <div className='post-item'>
      <Post post={post} />
      {post.comments.map((comment) => (
        <Post key={comment._id} post={comment} main={false} />
      ))}
    </div>
  )
}

export default PostItem
