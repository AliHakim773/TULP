import React from "react"
import "./styles.css"
import BasicLayout from "../../components/UI/BasicLayout"
import ProfileCard from "../../components/ProfileCard"

const EditProfile = () => {
  return (
    <BasicLayout>
      <div className='main-edit section-content flex'>
        <aside className='edit-aside'>
          <ProfileCard />
        </aside>
      </div>
    </BasicLayout>
  )
}

export default EditProfile
