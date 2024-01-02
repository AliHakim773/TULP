import { useState } from "react"
import { errorBlink } from "../../core/helpers/errorBlink"
import { authAPI } from "../../core/api/auth"

const useRegisterLogic = () => {
  const [error, setError] = useState({ msg: "", hidden: true })

  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    role: "student",
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
      text: "Email",
      id: "email",
      type: "email",
      placeholder: "example@email.com",
      value: values.email,
    },
    {
      text: "First Name",
      id: "firstName",
      type: "text",
      placeholder: "John",
      value: values.firstName,
    },
    {
      text: "Last Name",
      id: "lastName",
      type: "text",
      placeholder: "Doe",
      value: values.lastName,
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
  ]

  const HandleOnInputChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value })
  }

  const HandleOnSubmit = async () => {
    if (values.password !== values.confirmPassword) {
      errorBlink(setError, "Passwords do not match")
      return
    }
    if (
      !values.username ||
      !values.password ||
      !values.confirmPassword ||
      !values.email
    ) {
      errorBlink(setError, "All fields are required")
      return
    }
    try {
      console.log(values)
      const res = await authAPI.register(values)

      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  return {
    inputs,
    HandleOnInputChange,
    HandleOnSubmit,
    error,
  }
}

export default useRegisterLogic
