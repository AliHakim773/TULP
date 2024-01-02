import React from "react"
import "./styles.css"

const ProfileCard = () => {
  return (
    <div className='profile-card'>
      <div className='profile-card-1 flex column center w-100'>
        <div className='profile-role'>student</div>
        <div className='profile-img'>
          <img
            src={`http://localhost:8000/uploads/image-1703937457200.png`}
            alt=''
          />
        </div>
        <div className='profile-username'>John Doe</div>
      </div>
      <div className='profile-line' />
      <div className='profile-card-2 flex column center w-100'>
        {window.location.pathname !== "/edit-profile" && (
          <button className='profile-card-2-btn semi-bold'>Edit Profile</button>
        )}
        <div className='profile-info flex column'>
          <div className='profile-item'>Full Name: John Hassan Doe</div>
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
