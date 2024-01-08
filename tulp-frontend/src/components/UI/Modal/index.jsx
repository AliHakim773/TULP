import React from "react"
import "./styles.css"

const Modal = ({ children, isShowen = false }) => {
  return (
    <div className={`modal flex center ${!isShowen && "hidden"}`}>
      {children}
    </div>
  )
}

export default Modal
