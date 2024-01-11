import React from "react"
import "./styles.css"

const UserList = ({ title, users }) => {
  return (
    <div className='user-list w-100 shadow rounded-2'>
      <h4>User</h4>
      <div className='users flex column'>
        <div className='user-item flex'>
          <div className='user-item-name'>username</div>
          <div className='user-item-pfp circle'>
            <img
              className='circle'
              src='http://localhost:8000/uploads/default.png'
              alt='username'
            />
          </div>
        </div>
        <div className='user-item flex'>
          <div className='user-item-name'>username</div>
          <div className='user-item-pfp circle'>
            <img
              className='circle'
              src='http://localhost:8000/uploads/default.png'
              alt='username'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserList
