import React from "react"
import "./styles.css"
import { Link } from "react-router-dom"
import usePfpDropDownLogic from "./usePfpDropDownLogic"

const PfpDropDown = () => {
  const { user, isHidden, handleOnClick, handleOnClickProfile } =
    usePfpDropDownLogic()

  return (
    <div className='pfp-img' onClick={handleOnClickProfile}>
      <img src={`http://localhost:8000/${user.imageUrl}`} alt={user.username} />
      <div className={isHidden ? "pfp-drop-down" : "pfp-drop-down pfp-show"}>
        <Link to={"/profile"} className='pfp-drop-down-item'>
          {user.username}
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
    </div>
  )
}

export default PfpDropDown
