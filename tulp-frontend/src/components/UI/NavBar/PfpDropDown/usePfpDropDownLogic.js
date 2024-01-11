import { useDispatch, useSelector } from "react-redux"
import { clearUser, extractUserSlice } from "../../../../core/redux/userSlice"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const usePfpDropDownLogic = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(extractUserSlice)

  const [isHidden, setIsHidden] = useState(true)
  const handleOnClickProfile = () => {
    setIsHidden((prev) => !prev)
  }

  const handleOnClick = () => {
    localStorage.removeItem("token")
    dispatch(clearUser())
    navigate(0)
  }
  return { user, isHidden, handleOnClick, handleOnClickProfile }
}

export default usePfpDropDownLogic
