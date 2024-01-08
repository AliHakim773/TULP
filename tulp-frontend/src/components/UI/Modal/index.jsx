import React from "react"
import "./styles.css"

const Modal = ({ children, isShowen, closeModal }) => {
  return (
    <div
      id='modal-bg'
      className={`${isShowen ? "tulp-modal" : "tulp-modal-hidden"}`}
      onClick={(e) => {
        if (e.target.id === "modal-bg") closeModal()
      }}>
      {children}
    </div>
  )
}

export default Modal
