import React from "react"
import "./styles.css"
import BasicLayout from "../../components/UI/BasicLayout"
import LandingFeed from "../../components/LandingFeed"
import SearchClasses from "../../components/SearchClasses"

const LandingPage = () => {
  return (
    <>
      <BasicLayout>
        <div className='flex w-100 center'>
          <div className='home-page flex'>
            <aside className='landing-aside'>
              <SearchClasses />
            </aside>
            <LandingFeed />
          </div>
        </div>
      </BasicLayout>
    </>
  )
}

export default LandingPage
