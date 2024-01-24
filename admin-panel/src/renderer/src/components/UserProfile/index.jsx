import './styles.css'

const UserProfile = ({ user }) => {
  const { username, email, imageUrl, firstName, lastName } = user
  return (
    <div className="user-profile flex">
      <div className="pfp">
        <img src={`http://localhost:8000/${imageUrl}`} alt="" />
      </div>
      <div className="user-info flex column align-start justify-center">
        <div className="capitalize">Username: {username}</div>
        <div className="capitalize">
          Name: {firstName} {lastName}
        </div>
        <div>Email: {email}</div>
      </div>
    </div>
  )
}

export default UserProfile
