import React from "react"
import "./styles.css"
import InputField from "../Base/InputField"
import { Link } from "react-router-dom"
import Error from "../Base/Error"
import SubmitButton from "../Base/SubmitButton"
import useLoginLogic from "./useLoginLogic"

const LoginForm = () => {
  const { inputs, error, HandleOnInputChange, HandleOnSubmit } = useLoginLogic()

  return (
    <section className='login-section w-100 flex column center'>
      <div className='form-wrapper'>
        <h2 className='semmi-bold'>Login here</h2>
        <form className='login-form'>
          <div className='login-inputs'>
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
            <Error msg={error.msg} hidden={error.hidden} />
          </div>
          <div className='login-submit flex column center w-100'>
            <div className='login-submit-btn'>
              <SubmitButton text='Login' handleOnClick={HandleOnSubmit} />
            </div>
            <span className='note'>
              Don't have an account?{" "}
              <Link className='link' to={"/register"}>
                Register
              </Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  )
}

export default LoginForm
