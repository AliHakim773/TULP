import React, { useState } from "react"
import "./styles.css"
import InputField from "../Base/InputField"
import SubmitButton from "../Base/SubmitButton"
import { Link } from "react-router-dom"

const RegisterForm = () => {
  const [elements, setElements] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  })
  const HandleOnInputChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value })
  }
  const HandleOnSubmit = (e) => {
    console.log(elements)
  }

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
              />
            )
          })}
        </div>
        <div className='register-submit flex column center w-100'>
          <div className='register-submit-btn'>
            <SubmitButton />
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

const inputs = [
  {
    text: "Username",
    id: "username",
    type: "text",
    placeholder: "username",
  },
  {
    text: "Password",
    id: "password",
    type: "password",
    placeholder: "------------",
  },
  {
    text: "Confirm Password",
    id: "confirmPassword",
    type: "password",
    placeholder: "------------",
  },
  {
    text: "Email",
    id: "email",
    type: "email",
    placeholder: "example@email.com",
  },
]

export default RegisterForm
