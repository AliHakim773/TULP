import React from "react"
import "./styles.css"
import BasicLayout from "../../components/UI/BasicLayout"
import ProfileCard from "../../components/ProfileCard"

const CreateClass = () => {
  return (
    <BasicLayout>
      <div className='profile-section w-100 flex'>
        <div className='main-profile w-100 flex'>
          <ProfileCard />
        </div>
      </div>
    </BasicLayout>
  )
}

export default CreateClass
