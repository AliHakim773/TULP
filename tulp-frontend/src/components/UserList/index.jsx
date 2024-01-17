import React from "react"
import "./styles.css"

const UserList = ({ title = "title", users }) => {
  return (
    <div className='user-list w-100 shadow rounded-2'>
      <h4>{title}</h4>
      <div className='users flex column'>
        {users && users.length !== 0
          ? users.map((user) => {
              return (
                <div key={user._id} className='user-item flex'>
                  <div className='user-item-name'>{user.username}</div>
                  <div className='user-item-pfp circle'>
                    <img
                      className='circle'
                      src={`http://localhost:8000/${user.imageUrl}`}
                      alt={user.username}
                    />
                  </div>
                </div>
              )
            })
          : `No ${title}`}
      </div>
    </div>
  )
}

export default UserList
