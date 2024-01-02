import React from "react"
import "./styles.css"

const Error = ({ msg, hidden = true }) => {
  return <div className={`error ${!hidden ? "show" : ""}`}>{msg}</div>
}

export default Error
