import React from "react"
import "./styles.css"
import PostItem from "../PostItem"

const PostFeed = ({ posts, setPosts }) => {
  return (
    <div className='post-feed'>
      {posts.toReversed().map((post) => (
        <PostItem key={post._id} post={post} setPosts={setPosts} />
      ))}
    </div>
  )
}

export default PostFeed
