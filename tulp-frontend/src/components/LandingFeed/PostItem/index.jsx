import React from "react"
import "./styles.css"
import Post from "../Post"

const PostItem = ({ post }) => {
  return (
    <div className='post-item'>
      <Post post={post} />
      {post.comments.map((comment) => (
        <div key={comment._id} className='post-comment'>
          <Post post={comment} main={false} />
        </div>
      ))}
    </div>
  )
}

export default PostItem
