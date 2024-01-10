import React from "react"
import "./styles.css"

const InstructorItem = ({ instructor, onAccept }) => {
  return (
    <div
      className='instructor-item flex'
      onClick={() => {
        onAccept(instructor)
      }}>
      <div className='instructor-img'>
        <img
          src={`http://localhost:8000/${instructor.imageUrl}`}
          alt={instructor.username}
        />
      </div>
      {instructor.username}
    </div>
  )
}

export default InstructorItem
