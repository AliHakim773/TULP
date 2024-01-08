import React from "react"
import "./styles.css"
import InputField from "../Base/InputField"

const CreateClassForm = () => {
  return (
    <form className='class-create-form flex column'>
      <div className='class-name-input'>
        <InputField
          text='Class Name'
          id={"classname"}
          placeholder='Class Name'
        />
      </div>
      <div className='class-description flex column'>
        <label htmlFor='class-description'>Class Description</label>
        <textarea
          id='class-description'
          className='class-description-textarea'
          placeholder='Enter Class Description'
        />
      </div>
    </form>
  )
}

export default CreateClassForm
