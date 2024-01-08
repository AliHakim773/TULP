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
      <div className='class-create-input flex column'>
        <label htmlFor='class-description'>Class Description</label>
        <textarea
          id='class-description'
          className='class-create-input-textarea'
          placeholder='Enter Class Description'
        />
      </div>
      {/* TODO: adding instructors */}
      <div className='class-create-input instructor-input flex column'>
        <label htmlFor='class-description'>Add Instructors</label>
        <input
          type='text'
          id='class-description'
          className='class-create-input-field'
          placeholder='Enter Instructors name'
        />
      </div>
    </form>
  )
}

export default CreateClassForm
