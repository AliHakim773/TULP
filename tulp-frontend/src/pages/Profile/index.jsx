import React from "react"
import "./styles.css"
import ProfileCard from "../../components/ProfileCard"
import ClassCard from "../../components/ClassCard"
import useProfileLogic from "./useProfileLogic"

const Profile = () => {
  const { classes } = useProfileLogic()

  return (
    <div className='profile-section w-100 flex'>
      <div className='main-profile w-100 flex'>
        <aside className='profile-aside'>
          <ProfileCard />
        </aside>
        <div className='profile'>
          <div className='about-me-section'>
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              officiis quibusdam doloremque, vel accusamus eaque nemo deserunt
              ad aliquam numquam rem porro dolore possimus animi laudantium
              maiores consequatur laboriosam. Similique!
            </p>
          </div>
          <div className='profile-classes'>
            <h3>Open Classes</h3>{" "}
            <div className='classes-grid'>
              {classes?.map((classObject) => {
                return (
                  <ClassCard
                    key={classObject._id}
                    name={classObject.name}
                    description={classObject.description}
                    owner={classObject.owner.username}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
