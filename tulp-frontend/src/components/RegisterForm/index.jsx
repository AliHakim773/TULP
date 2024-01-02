import React, { useState } from "react"
import "./styles.css"
import InputField from "../Base/InputField"
import SubmitButton from "../Base/SubmitButton"
import { Link } from "react-router-dom"
import useRegisterLogic from "./useRegisterLogic"

const RegisterForm = () => {
  const { inputs, HandleOnInputChange, HandleOnSubmit } = useRegisterLogic()

  return (
    <section className='register-section w-100 flex column center'>
      <h2 className='semmi-bold'>Register here</h2>
      <form className='register-form'>
        <div className='register-inputs'>
          {inputs.map((input) => {
            return (
              <InputField
                text={input.text}
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                key={input.id}
                value={input.value}
                handleOnChange={HandleOnInputChange}
              />
            )
          })}
        </div>
        <div className='register-submit flex column center w-100'>
          <div className='register-submit-btn'>
            <SubmitButton text='Register' handleOnClick={HandleOnSubmit} />
          </div>
          <span className='note'>
            Have an account?{" "}
            <Link className='link' to={"/login"}>
              Login
            </Link>
          </span>
        </div>
      </form>
    </section>
  )
}

export default RegisterForm
