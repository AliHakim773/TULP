import React, { useEffect, useState } from "react"
import "./styles.css"
import { useDispatch, useSelector } from "react-redux"
import { changeImage, extractUserSlice } from "../../core/redux/userSlice"
import { Link } from "react-router-dom"
import facebook from "../../assets/svgs/facebook.svg"
import github from "../../assets/svgs/github.svg"
import instagram from "../../assets/svgs/instagram.svg"
import twitter from "../../assets/svgs/x-twitter.svg"
import linkedin from "../../assets/svgs/linkedin.svg"
import { userApi } from "../../core/api/user"

const ProfileCard = () => {
  const dispatch = useDispatch()
  const userSlice = useSelector(extractUserSlice)
  const [file, setFile] = useState("")

  const handleOnChange = async (e) => {
    setFile(e.target.files[0])
  }
  useEffect(() => {
    const upload = async () => {
      const formData = new FormData()
      formData.append("image", file)
      try {
        const res = await userApi.upload(formData)
        dispatch(changeImage(res))
      } catch (e) {
        console.log(e)
      }
    }
    upload()
  }, [file])

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
        {window.location.pathname !== "/edit-profile" ? (
          <Link to={"/edit-profile"} className='profile-card-2-btn semi-bold'>
            Edit Profile
          </Link>
        ) : (
          <form className='profile-card-2-btn upload-pic semi-bold flex center'>
            <input
              onChange={(e) => {
                e.preventDefault()
                handleOnChange(e)
              }}
              type='file'
              className='profile-card-2-btn upload-pic semi-bold flex center'
            />
            Uplaod Pic
          </form>
        )}

        <div className='profile-info flex column'>
          <div className='profile-item'>
            Full Name: {userSlice.firstName} {userSlice.lastName}
          </div>
          {userSlice.birth && (
            <div className='profile-item'>Birth Date: {userSlice.birth}</div>
          )}
          {userSlice.education ? (
            <>
              {userSlice.education.university && (
                <div className='profile-item'>
                  University: {userSlice.education.university}
                </div>
              )}
              {userSlice.education.dateOfGraduation && (
                <div className='profile-item'>
                  Graduation Date: {userSlice.education.dateOfGraduation}
                </div>
              )}
              {userSlice.education.degree && (
                <div className='profile-item'>
                  Degree: {userSlice.education.degree}
                </div>
              )}
            </>
          ) : (
            ""
          )}
          {/* FIXME: show only vailable links */}
          {userSlice.socialMediaLinks && (
            <div className='profile-social-media-links'>
              Social Media Links:
              <div className='profile-links flex row'>
                <a
                  target='_blank'
                  href={userSlice.socialMediaLinks.github}
                  className='sml-icon'>
                  <img src={github} alt='github' />
                </a>
                <a
                  target='_blank'
                  href={userSlice.socialMediaLinks.linkedin}
                  className='sml-icon'>
                  <img src={linkedin} alt='linkedin' />
                </a>
                <a
                  target='_blank'
                  href={userSlice.socialMediaLinks.instagram}
                  className='sml-icon'>
                  <img src={instagram} alt='instagram' />
                </a>
                <a
                  target='_blank'
                  href={userSlice.socialMediaLinks.twitter}
                  className='sml-icon'>
                  <img src={twitter} alt='twitter' />
                </a>
                <a
                  target='_blank'
                  href={userSlice.socialMediaLinks.facebook}
                  className='sml-icon'>
                  <img src={facebook} alt='facebook' />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
