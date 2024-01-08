import React from "react"
import "./styles.css"
import BasicLayout from "../../components/UI/BasicLayout"
import ProfileCard from "../../components/ProfileCard"
import ClassCard from "../../components/ClassCard"
import useProfileLogic from "./useProfileLogic"

const Profile = () => {
  const { test_class } = useProfileLogic()

  return (
    <BasicLayout>
      <div className='profile-section w-100 flex'>
        <div className='main-profile w-100 flex'>
          <aside className='profile-aside'>
            <ProfileCard />
          </aside>
          <div className='profile'>
            <div className='about-me-section'>
              <h3>About Me:</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                officiis quibusdam doloremque, vel accusamus eaque nemo deserunt
                ad aliquam numquam rem porro dolore possimus animi laudantium
                maiores consequatur laboriosam. Similique!
              </p>
            </div>
            <div className='profile-classes'>
              <h3>Open Classe</h3>{" "}
              <div className='classes-grid'>
                {test_class.map((classObject) => {
                  return (
                    <ClassCard
                      key={classObject.id}
                      name={classObject.name}
                      description={classObject.descriptiom}
                      owner={classObject.owner}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  )
}

export default Profile
