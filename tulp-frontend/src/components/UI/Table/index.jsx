import { useState } from "react"
import "./styles.css"
import Button from "../../Base/Button"

const Table = ({ className = "", users }) => {
  const [confirmation, setConfirmation] = useState(false)

  return (
    <div className={`table ${className}`}>
      <div
        id='table-confirmation'
        onClick={(e) => {
          if (e.target.id === "table-confirmation") setConfirmation(false)
        }}
        className={`table-confirmation flex column center rounded-2 white-bg shadow ${
          confirmation ? "active" : ""
        }`}>
        Are You sure
        <div className='flex'>
          <Button text='Yes' color='green' />
          <Button
            text='No'
            color='danger'
            onclick={() => {
              setConfirmation(false)
            }}
          />
        </div>
      </div>
      <div className='table-row-head'>
        <div className='table-cell table-cell-head'>#</div>
        <div className='table-cell table-cell-head'>Username</div>
        <div className='table-cell table-cell-head'>Full Name</div>
        <div className='table-cell table-cell-head'>Email</div>
        <div className='table-cell table-cell-head'>Action</div>
      </div>
      {users?.map((user, i) => {
        return (
          <div className='table-row' key={user._id}>
            <div className='table-cell'>{i}</div>
            <div className='table-cell'>{user.username}</div>
            <div className='table-cell'>
              {user.firstName} {user.lastName}
            </div>
            <div className='table-cell'>{user.email}</div>

            <div
              className='table-cell'
              onClick={() => {
                setConfirmation(true)
              }}>
              Remove
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Table
