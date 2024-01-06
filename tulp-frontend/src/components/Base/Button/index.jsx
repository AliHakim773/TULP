import React from "react"
import "./styles.css"

const Button = ({ text = "Button", color = "blue", onclick }) => {
  return (
    <button onClick={onclick} className={`basic-btn ${color} semi-bold`}>
      {text}
    </button>
  )
}

export default Button
