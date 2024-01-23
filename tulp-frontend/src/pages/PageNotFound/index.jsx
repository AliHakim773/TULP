import React from "react"
import "./styles.css"
import Button from "../../components/Base/Button"
import { useNavigate } from "react-router-dom"
import NavBar from "../../components/UI/NavBar"
import Footer from "../../components/UI/Footer"

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <NavBar />
      <div className='page-404'>
        <div className='not-found flex column center'>
          <div>
            404 Page Not Found <br />{" "}
            <Button text='Go to Home Page' onclick={() => navigate("/")} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PageNotFound
