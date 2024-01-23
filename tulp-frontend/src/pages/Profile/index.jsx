import React from "react"
import "./styles.css"
import ProfileCard from "../../components/ProfileCard"
import ClassCard from "../../components/ClassCard"
import userProfileLogic from "./userProfileLogic"

const Profile = () => {
  const { data, aboutMe } = userProfileLogic()

  return (
    <div className='profile-section w-100 flex'>
      <div className='main-profile w-100 flex'>
        <aside className='profile-aside'>
          <ProfileCard otherUser={data.user} />
        </aside>
        <div className='profile w-100'>
          <div className='about-me-section'>
            <h3>About</h3>
            <p>{aboutMe}</p>
          </div>
          {!data.owner && (
            <div className='profile-classes'>
              <h3>Classes Owned</h3>{" "}
              <div className='classes-grid'>
                {data.owner.map((classObject) => {
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
          )}

          {data.instructor.length !== 0 && (
            <div className='profile-classes'>
              <h3>Classes Instructing</h3>{" "}
              <div className='classes-grid'>
                {data.instructor.map((classObject) => {
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
          )}

          {data.student.length !== 0 && (
            <div className='profile-classes'>
              <h3>Classes Studying In</h3>{" "}
              <div className='classes-grid'>
                {data.student.map((classObject) => {
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
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
