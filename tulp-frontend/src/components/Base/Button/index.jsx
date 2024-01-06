import React from "react"
import "./styles.css"

const Button = ({ text = "Button", color = "blue", onclick }) => {
  return (
    <button onclick={onclick} className={`basic-btn ${color} semi-bold`}>
      {text}
    </button>
  )
}

export default Button
