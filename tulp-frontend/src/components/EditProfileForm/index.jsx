import React from "react"
import "./styles.css"
import useEditProfileLogic from "./useEditProfileLogic"
import InputField from "../Base/InputField"
import SubmitButton from "../Base/SubmitButton"
import Error from "../Base/Error"

const EditProfileForm = () => {
  const {
    inputs,
    socailMediaInputs,
    HandleOnSocialMediaChange,
    HandleOnSubmit,
    error,
  } = useEditProfileLogic()

  return (
    <form className='w-100'>
      <h2>Edit Profile</h2>
      <div className='edit-inputs'>
        {inputs.map((pair, i) => (
          <div key={i} className='edit-form-pair'>
            {pair.map((input) => (
              <InputField
                text={input.text}
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                key={input.id}
                value={input.value}
                handleOnChange={input.handleOnChange}
              />
            ))}
          </div>
        ))}
        <div className='edit-social-media'>
          <h4>Social Media Links</h4>
          {socailMediaInputs.map((pair, i) => (
            <div key={i} className='edit-form-pair'>
              {pair.map((input) => (
                <InputField
                  text={input.text}
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  key={input.id}
                  value={input.value}
                  handleOnChange={input.handleOnChange}
                />
              ))}
            </div>
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
