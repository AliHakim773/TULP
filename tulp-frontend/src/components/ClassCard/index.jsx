import React from "react"
import "./styles.css"

const ClassCard = ({ owner, name, description }) => {
  return (
    <div className='class-card flex column shadow rounded-2'>
      <div className='class-card-header flex column'>
        <p>
          By: <span className='blue-3-txt semi-bold'>{owner}</span>
        </p>
        <h4>{name}</h4>
      </div>
      <div className='class-card-body'>{description}</div>
    </div>
  )
}

export default ClassCard
