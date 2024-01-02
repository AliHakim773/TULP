import React from "react"
import "./styles.css"

const RoleSelect = ({ onChange }) => {
  const [role, setRole] = React.useState("student")
  const handleOnChange = (e) => {
    setRole(e.target.value)
    console.log(role)
  }
  return (
    <div className='role-select'>
      <label htmlFor='role'>Role</label>
      <select defaultValue={"studnet"} onChange={onChange} id='role'>
        <option value='studnet'>Studnet</option>
        <option value='instructor'>Instructor</option>
      </select>
    </div>
  )
}

export default RoleSelect
