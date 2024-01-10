import React from "react"
import "./styles.css"
import PostItem from "../PostItem"

const PostFeed = ({ posts }) => {
  return (
    <div className='post-feed'>
      {posts.toReversed().map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  )
}

export default PostFeed
