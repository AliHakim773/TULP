import React from "react"
import "./styles.css"
import comment from "../../../assets/svgs/comment.svg"
import like from "../../../assets/svgs/like.svg"
import liked from "../../../assets/svgs/liked.svg"
import usePostLogic from "./usePostLogic"

const Post = ({ post, postId }) => {
  const { _id, user, content, likes } = post
  const { isLiked, handleOnLike, likesCount } = usePostLogic(likes, postId, _id)

  return (
    <div className='post w-100 shadow flex column'>
      <div className='post-header flex'>
        <div className='post-id flex'>
          <div className='post-img circle'>
            <img
              className='circle'
              src={`http://localhost:8000/${user.imageUrl}`}
              alt='user Image'
            />
          </div>
          <div className='blue-3-txt semi-bold'>{user.username}</div>
          <div className='post-time grey-1-txt'>- {/*created_at*/} ago</div>
        </div>
      </div>
      <div className='post-body'>{content}</div>
      <div className='post-footer flex'>
        <div className='post-footer-detail flex center'>
          {likesCount}{" "}
          <div className='post-icon' onClick={handleOnLike}>
            <img src={isLiked ? liked : like} alt='likes' />
          </div>
        </div>
        {!postId && (
          <div className='post-footer-detail flex center'>
            {post.comments.length}{" "}
            <div className='post-icon'>
              <img src={comment} alt='comment' />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Post
