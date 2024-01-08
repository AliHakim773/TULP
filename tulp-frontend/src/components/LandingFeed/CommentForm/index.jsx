import React from "react"
import "./styles.css"
import Button from "../../Base/Button"
import useComentFormLogic from "./useComentFormLogic"

const CommentForm = ({ closeModal, postId }) => {
  const { commentRef, handleOnClick } = useComentFormLogic(postId)

  return (
    <div className='comment-field'>
      <form className='flex column'>
        <div className='comment-form-header flex w-100'>
          <div className='comment-btn'>
            <Button
              text='Post Comment'
              type='submit'
              color='blue'
              onclick={async (e) => {
                e.preventDefault()
                await handleOnClick()
                closeModal()
              }}
            />
          </div>
          <div
            className='close-modal'
            onClick={() => {
              commentRef.current.value = ""
              closeModal()
            }}>
            X
          </div>
        </div>
        <textarea
          className='comment-field-input border'
          name='comment'
          id='comment'
          placeholder='Type Here'
          ref={commentRef}
        />
      </form>
    </div>
  )
}

export default CommentForm
