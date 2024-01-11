import React from "react"
import "./styles.css"
import BasicLayout from "../../components/UI/BasicLayout"
import UserList from "../../components/UserList"

const ClassHomePage = () => {
  return (
    <BasicLayout>
      <div className='class-page flex w-100'>
        <aside className='flex column'>
          <UserList />
          <UserList />
        </aside>
        <div className='class-page-main'></div>
      </div>
    </BasicLayout>
  )
}

export default ClassHomePage
