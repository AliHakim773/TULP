import React from "react"
import "./styles.css"
import { Link, useNavigate } from "react-router-dom"
import { clearUser } from "../../../../core/redux/userSlice"
import { useDispatch } from "react-redux"

const PfpDropDown = ({ isHidden, user }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOnClick = () => {
    localStorage.removeItem("token")
    dispatch(clearUser())
    navigate("/")
  }

  return (
    <div className={isHidden ? "pfp-drop-down" : "pfp-drop-down pfp-show"}>
      <Link to={"/profile"} className='pfp-drop-down-item'>
        {user}
      </Link>
      <Link to={"/edit-profile"} className='pfp-drop-down-item'>
        Edit Profile
      </Link>
      {/* TODO: authorize this */}
      <Link to={"/create-class"} className='pfp-drop-down-item'>
        Create A Class
      </Link>
      <Link className='pfp-drop-down-item' onClick={handleOnClick}>
        Log out
      </Link>
    </div>
  )
}

export default PfpDropDown
