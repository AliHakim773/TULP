import React from "react"
import "./styles.css"
import UserList from "../../components/UserList"

const ClassHomePage = () => {
  return (
    <div className='class-page flex w-100'>
      <aside className='flex column'>
        <UserList />
        <UserList />
      </aside>
      <div className='class-page-main'></div>
    </div>
  )
}

export default ClassHomePage
