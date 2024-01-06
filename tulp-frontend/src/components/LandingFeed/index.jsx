import React from "react"
import "./styles.css"
import PostField from "./PostField"
import PostFeed from "./PostFeed"

const LandingFeed = () => {
  return (
    <main className='landing-feed-main shadow'>
      <PostField />
      <PostFeed />
    </main>
  )
}

export default LandingFeed
