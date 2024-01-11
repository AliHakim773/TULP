import React from "react"
import "./styles.css"
import ProfileCard from "../../components/ProfileCard"
import CreateClassForm from "../../components/CreateClassForm"

const CreateClass = () => {
  return (
      <div className='create-class-section w-100 flex'>
        <div className='create-class-main w-100 flex'>
          <aside>
            <ProfileCard />
          </aside>
          <section className='w-100'>
            <CreateClassForm />
          </section>
        </div>
      </div>
  )
}

export default CreateClass
