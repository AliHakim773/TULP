import React from "react"
import "./styles.css"

const InstructorItem = ({ instructor, onAccept }) => {
  return (
    <div
      className='instructor-item'
      onClick={() => {
        onAccept(instructor)
      }}>
      {instructor.username}
    </div>
  )
}

export default InstructorItem
