import React from "react"
import "./styles.css"
import PostItem from "../PostItem"
import usePostFeedLogic from "./usePostFeedLogic"

const PostFeed = () => {
  const { posts } = usePostFeedLogic()

  return (
    <div className='post-feed'>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  )
}

export default PostFeed
