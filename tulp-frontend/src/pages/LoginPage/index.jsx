import React from "react"
import "./styles.css"
import BasicLayout from "../../components/UI/BasicLayout"
import LoginForm from "../../components/LoginForm"

const LoginPage = () => {
  return (
    <BasicLayout>
      <LoginForm />
    </BasicLayout>
  )
}

export default LoginPage
