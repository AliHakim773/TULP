import React from "react"
import "./styles.css"

const InstructorItem = ({ instructor, onAccept = undefined }) => {
  return (
    <div
      className='instructor-item'
      onClick={() => {
        if (onAccept != undefined) onAccept(instructor)
      }}>
      {instructor.username}
    </div>
  )
}

export default InstructorItem
