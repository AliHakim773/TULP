import React from "react"
import "./styles.css"
import ProfileCard from "../../components/ProfileCard"
import EditProfileForm from "../../components/EditProfileForm"

const EditProfile = () => {
  return (
    <div className='edit-section w-100 flex'>
      <div className='main-edit w-100 flex'>
        <aside className='edit-aside'>
          <ProfileCard />
        </aside>
        <section className='edit-form-section w-100'>
          <EditProfileForm />
        </section>
      </div>
    </div>
  )
}

export default EditProfile
