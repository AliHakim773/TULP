import React from "react"
import "./styles.css"
import InputField from "../Base/InputField"
import useCreateClassFormLogic from "./useCreateClassFormLogic"
import InstructorItem from "./InstructorItem/inde"

const CreateClassForm = () => {
  const { handleInstructorSearch, result, handleOnAccept } =
    useCreateClassFormLogic()

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
          onChange={handleInstructorSearch}
        />
        <div className='instructor-search flex column'>
          {result.map((instructor) => (
            <InstructorItem
              key={instructor._id}
              username={instructor.username}
              onAccept={handleOnAccept}
            />
          ))}
        </div>
      </div>
      <div className='instructors-list flex column'>
        <InstructorItem />
        <InstructorItem />
        <InstructorItem />
      </div>
    </form>
  )
}

export default CreateClassForm
