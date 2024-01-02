import { useState } from "react"

const useRegisterLogic = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  })

  const inputs = [
    {
      text: "Username",
      id: "username",
      type: "text",
      placeholder: "username",
      value: values.username,
    },
    {
      text: "Password",
      id: "password",
      type: "password",
      placeholder: "------------",
      value: values.password,
    },
    {
      text: "Confirm Password",
      id: "confirmPassword",
      type: "password",
      placeholder: "------------",
      value: values.confirmPassword,
    },
    {
      text: "Email",
      id: "email",
      type: "email",
      placeholder: "example@email.com",
      value: values.email,
    },
  ]

  const HandleOnInputChange = (e) => {
    console.log(values)
    setValues({ ...values, [e.target.id]: e.target.value })
  }

  const HandleOnSubmit = (e) => {
    console.log(values)
  }

  return {
    inputs,
    HandleOnInputChange,
    HandleOnSubmit,
  }
}

export default useRegisterLogic
