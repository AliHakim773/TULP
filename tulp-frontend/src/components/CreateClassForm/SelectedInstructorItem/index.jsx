import React from "react"
import "./styles.css"

const SelectedInstructorItem = ({ instructor, onRemove }) => {
  return (
    <div className='instructor-selected flex'>
      {instructor.username}{" "}
      <span
        onClick={() => {
          onRemove(instructor)
        }}>
        X
      </span>
    </div>
  )
}

export default SelectedInstructorItem
