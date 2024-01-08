import React from "react"
import "./styles.css"

const ClassCard = ({ owner, name, description }) => {
  return (
    <div className='class-card'>
      <div className='class-card-header flex column'>
        <span>By: {owner}</span>
        <h4>{name}</h4>
      </div>
      <div className='class-card-body'>{description}</div>
    </div>
  )
}

export default ClassCard
