import React from "react"
import "./styles.css"
import LandingFeed from "../../components/LandingFeed"
import SearchClasses from "../../components/SearchClasses"
import RightAside from "../../components/RightAside"

const LandingPage = () => {
  return (
    <>
      <div className='flex w-100 center'>
        <div className='home-page flex'>
          <aside className='landing-aside'>
            <SearchClasses />
          </aside>
          <LandingFeed />
          <aside className='landing-aside'>
            <RightAside />
          </aside>
        </div>
      </div>
    </>
  )
}

export default LandingPage
