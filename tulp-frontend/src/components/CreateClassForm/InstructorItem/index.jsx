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
          src={`${import.meta.env.VITE_BASE_URL}${instructor.imageUrl}`}
          alt={instructor.username}
        />
      </div>
      {instructor.username}
    </div>
  )
}

export default InstructorItem
