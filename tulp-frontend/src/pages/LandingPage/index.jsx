import React from "react"
import "./styles.css"
import LandingFeed from "../../components/LandingFeed"
import SearchClasses from "../../components/SearchClasses"

const LandingPage = () => {
  return (
    <>
      <div className='flex w-100 center'>
        <div className='home-page flex'>
          <aside className='landing-aside'>
            <SearchClasses />
          </aside>
          <LandingFeed />
        </div>
      </div>
    </>
  )
}

export default LandingPage
