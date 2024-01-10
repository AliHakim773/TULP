import React from "react"
import "./styles.css"
import Post from "../Post"

const PostItem = ({ post, setPosts }) => {
  return (
    <div className='post-item'>
      <Post post={post} setPosts={setPosts} />
      {post.comments.toReversed().map((comment) => (
        <div key={comment._id} className='post-comment'>
          <Post post={comment} postId={post._id} />
        </div>
      ))}
    </div>
  )
}

export default PostItem
