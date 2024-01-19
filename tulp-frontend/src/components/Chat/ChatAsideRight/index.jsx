import { NavLink } from "react-router-dom"

const ChatAsideRight = ({ people }) => {
  return (
    <div className='border chat-aside chat-aside-right flex column'>
      <div className='chat-aside-header chat-aside-item'>People</div>
      {people &&
        people.map((user) => {
          return (
            <NavLink
              to={user.username}
              key={user._id}
              className='chat-aside-item'>
              {user.username}
            </NavLink>
          )
        })}
    </div>
  )
}

export default ChatAsideRight
