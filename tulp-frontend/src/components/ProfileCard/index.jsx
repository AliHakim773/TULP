import React, { useEffect, useState } from "react"
import "./styles.css"
import { useDispatch, useSelector } from "react-redux"
import { changeImage, extractUserSlice } from "../../core/redux/userSlice"
import { Link, useParams } from "react-router-dom"
import facebook from "../../assets/svgs/facebook.svg"
import github from "../../assets/svgs/github.svg"
import instagram from "../../assets/svgs/instagram.svg"
import twitter from "../../assets/svgs/x-twitter.svg"
import linkedin from "../../assets/svgs/linkedin.svg"
import { userApi } from "../../core/api/user"
import toast from "react-hot-toast"

const ProfileCard = ({ otherUser }) => {
  const dispatch = useDispatch()
  let user = useSelector(extractUserSlice)
  if (otherUser) {
    user = otherUser
  }
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
        toast.error(e.response.data.error)
      }
    }
    upload()
  }, [file])

  return (
    <div className='profile-card shadow'>
      <div className='profile-card-1 flex column center w-100'>
        <div className='profile-role'>{user.role}</div>
        <div className='profile-img'>
          <img
            src={`${import.meta.env.VITE_BASE_URL}${user.imageUrl}`}
            alt=''
          />
        </div>
        <div className='profile-username'>{user.username}</div>
      </div>
      <div className='profile-line' />
      <div className='profile-card-2 flex column center w-100'>
        {window.location.pathname === "/profile" ? (
          <Link
            to={"/edit-profile"}
            className='profile-card-2-btn semi-bold flex center'>
            Edit Profile
          </Link>
        ) : window.location.pathname === "/edit-profile" ? (
          <form className='profile-card-2-btn upload-pic semi-bold flex center'>
            <input
              onChange={(e) => {
                e.preventDefault()
                handleOnChange(e)
              }}
              type='file'
              className='profile-card-2-btn upload-pic semi-bold flex center'
            />
            Uplaod Photo
          </form>
        ) : (
          ""
        )}

        <div className='profile-info flex column'>
          <div className='profile-item'>
            Full Name: {user.firstName} {user.lastName}
          </div>
          {user.birth && (
            <div className='profile-item'>Birth Date: {user.birth}</div>
          )}
          {user.education ? (
            <>
              {user.education.university && (
                <div className='profile-item'>
                  University: {user.education.university}
                </div>
              )}
              {user.education.dateOfGraduation && (
                <div className='profile-item'>
                  Graduation Date: {user.education.dateOfGraduation}
                </div>
              )}
              {user.education.degree && (
                <div className='profile-item'>
                  Degree: {user.education.degree}
                </div>
              )}
            </>
          ) : (
            ""
          )}
          {/* FIXME: show only vailable links */}
          {user.socialMediaLinks && (
            <div className='profile-social-media-links'>
              Social Media Links:
              <div className='profile-links flex row'>
                <a
                  target='_blank'
                  href={user.socialMediaLinks.github}
                  className='sml-icon'>
                  <img src={github} alt='github' />
                </a>
                <a
                  target='_blank'
                  href={user.socialMediaLinks.linkedin}
                  className='sml-icon'>
                  <img src={linkedin} alt='linkedin' />
                </a>
                <a
                  target='_blank'
                  href={user.socialMediaLinks.instagram}
                  className='sml-icon'>
                  <img src={instagram} alt='instagram' />
                </a>
                <a
                  target='_blank'
                  href={user.socialMediaLinks.twitter}
                  className='sml-icon'>
                  <img src={twitter} alt='twitter' />
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
