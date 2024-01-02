import React from "react"
import "./styles.css"

const SubmitButton = ({ text = "submit", handleOnClick }) => {
  return (
    <button
      type='submit'
      onClick={handleOnClick}
      className='submit-btn w-100 semi-bold'>
      {text}
    </button>
  )
}

export default SubmitButton
