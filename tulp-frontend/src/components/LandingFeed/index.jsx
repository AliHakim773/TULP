import React from "react"
import "./styles.css"
import PostField from "./PostField"
import PostFeed from "./PostFeed"
import useLandingFeedLogic from "./useLandingFeedLogic"

const LandingFeed = () => {
  const { posts, setPosts } = useLandingFeedLogic()

  return (
    <main className='landing-feed-main shadow'>
      <PostField setPosts={setPosts} />
      <PostFeed posts={posts} setPosts={setPosts} />
    </main>
  )
}

export default LandingFeed
