import React from "react"
import "./styles.css"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../core/redux/userSlice"
import { Link } from "react-router-dom"

const ProfileCard = () => {
  const userSlice = useSelector(extractUserSlice)

  return (
    <div className='profile-card'>
      <div className='profile-card-1 flex column center w-100'>
        <div className='profile-role'>{userSlice.role}</div>
        <div className='profile-img'>
          <img src={`http://localhost:8000/${userSlice.imageUrl}`} alt='' />
        </div>
        <div className='profile-username'>{userSlice.username}</div>
      </div>
      <div className='profile-line' />
      <div className='profile-card-2 flex column center w-100'>
        {window.location.pathname !== "/edit-profile" && (
          <Link to={"/edit-profile"} className='profile-card-2-btn semi-bold'>
            Edit Profile
          </Link>
        )}
        <div className='profile-info flex column'>
          <div className='profile-item'>
            Full Name: {userSlice.firstName} {userSlice.lastName}
          </div>
          <div className='profile-item'>Graduated At: John Hassan Doe</div>
          <div className='profile-item'>Degree: John Hassan Doe</div>
          <div className='profile-item'>Birth Date: 2000/1/1</div>
          <div className='profile-social-media-links'>Social Media Links:</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
