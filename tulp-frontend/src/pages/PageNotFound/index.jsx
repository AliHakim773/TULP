import React from "react"
import "./styles.css"
import Button from "../../components/Base/Button"
import { useNavigate } from "react-router-dom"

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='not-found flex column center'>
      <div>
        404 Page Not Found <br />{" "}
        <Button text='Go to Home Page' onclick={() => navigate("/")} />
      </div>
    </div>
  )
}

export default PageNotFound
