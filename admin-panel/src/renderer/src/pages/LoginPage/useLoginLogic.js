import { useState } from 'react'
import authAPI from '../../core/api/auth'
import { local } from '../../core/helpers/localStorage'
import { useNavigate } from 'react-router-dom'

const useLoginLogic = () => {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [credentials, setCredentials] = useState({})
  const [error, setError] = useState({ state: false, message: '' })

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleOnClick = async (e) => {
    e.preventDefault()
    try {
      const res = await authAPI.login(credentials)
      console.log(res)
      local('token', `Bearer ${res.token}`)
      local('user', JSON.stringify(res.user))
      navigate('/home')
    } catch {
      setError({ state: true, message: 'Wrong credentials' })
    }
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return {
    showPassword,
    error,
    handleOnChange,
    handleOnClick,
    handleMouseDownPassword,
    handleClickShowPassword
  }
}

export default useLoginLogic
