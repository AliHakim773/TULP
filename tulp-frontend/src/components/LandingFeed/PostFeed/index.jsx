import React from "react"
import "./styles.css"
import PostItem from "../PostItem"

const PostFeed = () => {
  return (
    <div className='post-feed'>
      <PostItem post={test_post} />
    </div>
  )
}
const test_post = {
  _id: "asdad",
  username: "ali",
  image_url: "uploads/defualt.png",
  created_at: "1h",
  content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Asperiores, quod. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Eligendi, omnis! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Et, at!`,
  likes: "30",
  comments: [
    {
      _id: "fasdv",
      username: "user",
      image_url: "uploads/defualt.png",
      created_at: "2h",
      content: "stupid",
      likes: "2",
    },
    {
      _id: "agfrtrg",
      username: "user 2",
      image_url: "uploads/defualt.png",
      created_at: "2h",
      content: "Hello",
      likes: "12",
    },
  ],
}
export default PostFeed
