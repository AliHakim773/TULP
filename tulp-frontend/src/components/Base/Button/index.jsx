import React from "react"
import "./styles.css"

const Button = ({
  type = "button",
  text = "Button",
  color = "blue",
  onclick,
}) => {
  return (
    <button
      type={type}
      onClick={(e) => {
        e.preventDefault()
        onclick()
      }}
      className={`basic-btn ${color} semi-bold`}>
      {text}
    </button>
  )
}

export default Button
