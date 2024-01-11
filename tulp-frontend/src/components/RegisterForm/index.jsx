import React from "react"
import "./styles.css"
import InputField from "../Base/InputField"
import SubmitButton from "../Base/SubmitButton"
import { Link } from "react-router-dom"
import useRegisterLogic from "./useRegisterLogic"
import Error from "../Base/Error"
import RoleSelect from "./RoleSelect"

const RegisterForm = () => {
  const { inputs, error, HandleOnInputChange, HandleOnSubmit } =
    useRegisterLogic()

  return (
    <section className='register-section w-100 flex column center'>
      <div className='form-wrapper shadow'>
        <h2 className='semmi-bold'>Register</h2>
        <form className='register-form'>
          <div className='register-inputs'>
            {inputs.map((pair, i) => (
              <div key={i} className='register-form-pair'>
                {pair.map((input) => (
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
              </div>
            ))}
            <RoleSelect onChange={HandleOnInputChange} />
            <Error msg={error.msg} hidden={error.hidden} />
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
      </div>
    </section>
  )
}

export default RegisterForm
