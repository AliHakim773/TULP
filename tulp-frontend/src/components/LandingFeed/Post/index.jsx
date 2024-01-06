import React from "react"
import "./styles.css"
import comment from "../../../assets/svgs/comment.svg"
import like from "../../../assets/svgs/like.svg"
import liked from "../../../assets/svgs/liked.svg"

const Post = ({ post }) => {
  const { username, created_at, content, likes, comments, image_url } = post
  return (
    <div className='post w-100 shadow flex column'>
      <div className='post-header flex'>
        <div className='post-id flex'>
          <div className='blue-3-txt semi-bold'>{username}</div>
          <div className='post-time grey-1-txt'>- {created_at} ago</div>
        </div>
        <div className='post-img circle'>
          <img src={image_url} alt='user Image' />
        </div>
      </div>
      <div className='post-body'>{content}</div>
      <div className='post-footer flex'>
        <div className='post-footer-detail flex center'>
          {likes}{" "}
          <div className='post-icon'>
            <img src={like} alt='likes' />
          </div>
        </div>
        <div className='post-footer-detail flex center'>
          {comments.length}{" "}
          <div className='post-icon'>
            <img src={comment} alt='comment' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
