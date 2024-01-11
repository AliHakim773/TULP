import React from "react"
import "./styles.css"

const RoleSelect = ({ onChange }) => {
  return (
    <div className='role-select flex'>
      <label htmlFor='role'>Role:</label>
      <div className='role-item'>
        <input
          checked='true'
          type='radio'
          name='role'
          id='student'
          onChange={onChange}
          value={"student"}
        />
        <label htmlFor='student'>Studnet</label>
      </div>
      <div className='role-item'>
        <input
          type='radio'
          name='role'
          id='instructor'
          onChange={onChange}
          value={"instructor"}
        />
        <label htmlFor='instructor'>Instructor</label>
      </div>
    </div>
  )
}

export default RoleSelect
