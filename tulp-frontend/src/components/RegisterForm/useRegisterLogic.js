import { useState } from "react"
import { errorBlink } from "../../core/helpers/errorBlink"
import { authAPI } from "../../core/api/auth"
import { local } from "../../core/helpers/localstorage"
import { useNavigate } from "react-router-dom"
import { setUser } from "../../core/redux/userSlice"
import { useDispatch } from "react-redux"

const useRegisterLogic = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
    [
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
    ],

    [
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
    ],
    [
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
    ],
  ]

  const HandleOnInputChange = (e) => {
    if (e.target.name === "role")
      setValues({ ...values, [e.target.name]: e.target.value })
    else setValues({ ...values, [e.target.id]: e.target.value })
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
      const res = await authAPI.register(values)

      const token = `Bearer ${res.token}`
      local("token", token)

      dispatch(setUser(res.user))
      navigate("/home")
    } catch (e) {
      errorBlink(setError, e.response.data.error)
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
