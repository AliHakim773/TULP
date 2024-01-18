import React from "react"
import "./styles.css"
import Button from "../../Base/Button"
import usePostFieldLogic from "./usePostFieldLogic"

const PostField = ({ setPosts }) => {
  const { postRef, handleonClick } = usePostFieldLogic(setPosts)
  return (
    <div className='post-field'>
      <form className='flex column'>
        <div className='post-btn'>
          <Button
            text='Post'
            type='submit'
            color='blue'
            onclick={(e) => {
              handleonClick()
            }}
          />
        </div>
        <textarea
          className='post-field-input border'
          name='post'
          id='post'
          placeholder='Type Here'
          ref={postRef}
        />
      </form>
    </div>
  )
}

export default PostField
