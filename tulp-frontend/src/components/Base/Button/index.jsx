import React from "react"
import "./styles.css"

const Button = ({ text = "Button", color = "blue" }) => {
  return <button className={`basic-btn ${color}-3-bg semi-bold`}>{text}</button>
}

export default Button
