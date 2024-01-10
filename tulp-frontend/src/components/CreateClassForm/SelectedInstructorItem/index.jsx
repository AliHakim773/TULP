import React from "react"
import "./styles.css"

const SelectedInstructorItem = ({ instructor, onRemove }) => {
  return (
    <div className='instructor-selected flex'>
      {instructor.username} <span>X</span>
    </div>
  )
}

export default SelectedInstructorItem
