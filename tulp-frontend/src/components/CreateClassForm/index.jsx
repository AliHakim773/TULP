import React from "react"
import "./styles.css"
import InputField from "../Base/InputField"
import useCreateClassFormLogic from "./useCreateClassFormLogic"
import InstructorItem from "./InstructorItem"
import SelectedInstructorItem from "./SelectedInstructorItem"
import Button from "../Base/Button"
import SearchInstructor from "../SearchInstructor"

const CreateClassForm = () => {
  const {
    instructors,
    descriptionRef,
    handleOnCreateClass,
    onNameChange,
    handleOnAccept,
    handleOnRemove,
  } = useCreateClassFormLogic()

  return (
    <form className='class-create-form flex column'>
      <div className='class-name-input'>
        <InputField
          text='Class Name'
          id={"classname"}
          placeholder='Class Name'
          handleOnChange={onNameChange}
        />
      </div>
      <div className='class-create-input flex column'>
        <label htmlFor='class-description'>Class Description</label>
        <textarea
          id='class-description'
          className='class-create-input-textarea'
          placeholder='Enter Class Description'
          ref={descriptionRef}
        />
      </div>
      <SearchInstructor handleOnAccept={handleOnAccept} />
      <div className='instructors-list flex'>
        {instructors.map((instructor) => (
          <SelectedInstructorItem
            key={instructor._id}
            instructor={instructor}
            onRemove={handleOnRemove}
          />
        ))}
      </div>
      <div className='craete-btn'>
        <Button text='Create Class' onclick={handleOnCreateClass} />
      </div>
    </form>
  )
}

export default CreateClassForm
