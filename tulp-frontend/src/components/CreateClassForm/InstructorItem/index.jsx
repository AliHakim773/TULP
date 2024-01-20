import React from "react"
import "./styles.css"
import GLOBAL from "../../../core/Global"

const InstructorItem = ({ instructor, onAccept }) => {
  return (
    <div
      className='instructor-item flex'
      onClick={() => {
        onAccept(instructor)
      }}>
      <div className='instructor-img'>
        <img
          src={`${GLOBAL.BASE_URL}${instructor.imageUrl}`}
          alt={instructor.username}
        />
      </div>
      {instructor.username}
    </div>
  )
}

export default InstructorItem
