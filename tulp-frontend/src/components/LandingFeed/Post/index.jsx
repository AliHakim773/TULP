import React, { useState } from "react"
import "./styles.css"
import comment from "../../../assets/svgs/comment.svg"
import like from "../../../assets/svgs/like.svg"
import liked from "../../../assets/svgs/liked.svg"
import usePostLogic from "./usePostLogic"
import Modal from "../../UI/Modal"
import CommentForm from "../CommentForm"
import timeSince from "../../../core/helpers/timeSince"
import GLOBAL from "../../../core/Global"

const Post = ({ post, postId, setPosts }) => {
  const { _id, user, content, likes, createdAt } = post
  const { isLiked, handleOnLike, likesCount, isShowen, closeModal, openModal } =
    usePostLogic(likes, postId, _id)

  return (
    <div className='post w-100 shadow flex column'>
      <div className='post-header flex'>
        <div className='post-id flex'>
          <div className='post-img circle'>
            <img
              className='circle'
              src={`${GLOBAL.BASE_URL}${user.imageUrl}`}
              alt='user Image'
            />
          </div>
          <div className='blue-3-txt semi-bold'>{user.username}</div>
          <div className='post-time grey-1-txt'>- {timeSince(createdAt)}</div>
        </div>
      </div>
      <div
        className='post-body'
        dangerouslySetInnerHTML={{ __html: content }}
      />
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
            <div className='post-icon' onClick={openModal}>
              <img src={comment} alt='comment' />
            </div>
            <Modal isShowen={isShowen} closeModal={closeModal}>
              <CommentForm
                closeModal={closeModal}
                postId={_id}
                setPosts={setPosts}
              />
            </Modal>
          </div>
        )}
      </div>
    </div>
  )
}

export default Post
