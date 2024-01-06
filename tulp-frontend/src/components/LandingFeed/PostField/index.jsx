import React from "react"
import "./styles.css"
import Button from "../../Base/Button"

const PostField = () => {
  return (
    <div className='post-field'>
      <form className='flex column'>
        <div className='post-btn'>
          <Button text='Post' type='submit' color='blue' />
        </div>
        <textarea
          className='post-field-input border'
          name='post'
          id='post'
          placeholder='Type Here'></textarea>
      </form>
    </div>
  )
}

export default PostField
