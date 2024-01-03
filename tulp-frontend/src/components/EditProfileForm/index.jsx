import React from "react"
import "./styles.css"
import useEditProfileLogic from "./useEditProfileLogic"
import InputField from "../Base/InputField"
import SubmitButton from "../Base/SubmitButton"
import Error from "../Base/Error"

const EditProfileForm = () => {
  const {
    inputs,
    educationInputs,
    socailMediaInputs,
    HandleOnSocialMediaChange,
    HandleOnInputChange,
    HandleOnEducationChange,
    HandleOnSubmit,
    error,
  } = useEditProfileLogic()

  return (
    <form className='w-100'>
      <h2>Edit Profile</h2>
      <div className='edit-inputs'>
        {inputs.map((input) => (
          <InputField
            text={input.text}
            id={input.id}
            type={input.type}
            placeholder={input.placeholder}
            key={input.id}
            value={input.value}
            handleOnChange={HandleOnInputChange}
          />
        ))}
        {educationInputs.map((input) => (
          <InputField
            text={input.text}
            id={input.id}
            type={input.type}
            placeholder={input.placeholder}
            key={input.id}
            value={input.value}
            handleOnChange={HandleOnEducationChange}
          />
        ))}
        <div className='edit-social-media'>
          <h4>Social Media Links</h4>
          {socailMediaInputs.map((input) => (
            <InputField
              text={input.text}
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
              key={input.id}
              value={input.value}
              handleOnChange={HandleOnSocialMediaChange}
            />
          ))}
          <Error msg={error.msg} hidden={error.hidden} />
        </div>
      </div>
      <div className='edit-submit-btn'>
        <SubmitButton text='Save' handleOnClick={HandleOnSubmit} />
      </div>
    </form>
  )
}

export default EditProfileForm
