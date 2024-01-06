import React from "react"
import "./styles.css"
import BasicLayout from "../../components/UI/BasicLayout"

const LandingPage = () => {
  return (
    <>
      <BasicLayout>
        <div className='flex w-100 center'>
          <div className='home-page flex'>
            <aside>aside</aside>
            <main>main</main>
          </div>
        </div>
      </BasicLayout>
    </>
  )
}

export default LandingPage
