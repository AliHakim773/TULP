import { useState } from "react"
import { errorBlink } from "../../core/helpers/errorBlink"
import { authAPI } from "../../core/api/auth"
import { local } from "../../core/helpers/localstorage"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUser } from "../../core/redux/userSlice"

const useLoginLogic = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState({ msg: "", hidden: true })

  const [values, setValues] = useState({
    username: "",
    password: "",
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
  ]

  const HandleOnInputChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value })
  }

  const HandleOnSubmit = async () => {
    if (!values.username || !values.password) {
      errorBlink(setError, "All fields are required")
      return
    }
    try {
      const res = await authAPI.login(values)
      const token = `Bearer ${res.token}`
      local("token", token)

      dispatch(setUser(res.user))
      navigate("/home")
    } catch (e) {
      errorBlink(setError, e.response.data.message)
    }
  }

  return {
    inputs,
    HandleOnInputChange,
    HandleOnSubmit,
    error,
  }
}

export default useLoginLogic
