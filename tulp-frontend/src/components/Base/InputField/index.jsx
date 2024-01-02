import React from "react"
import "./styles.css"

const InputField = ({
  text = "text",
  id = text,
  type = "text",
  placeholder = "placeholder",
}) => {
  return (
    <div className='input-field flex column w-100'>
      <label className='w-100' htmlFor={id}>
        {text}
      </label>
      <input className='w-100' type={type} id={id} placeholder={placeholder} />
    </div>
  )
}

export default InputField
