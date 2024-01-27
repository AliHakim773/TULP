import { useDispatch, useSelector } from "react-redux"
import { clearUser, extractUserSlice } from "../../core/redux/userSlice"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

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
    navigate("/")
  }

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.id === "user-image" || e.target.id === "pfp-dropdown") return
      setIsHidden(true)

      return document.removeEventListener("click", (e) => {
        if (e.target.id === "user-image" || e.target.id === "pfp-dropdown")
          return
        setIsHidden(true)
      })
    })
  }, [])
  return { user, isHidden, handleOnClick, handleOnClickProfile }
}

export default usePfpDropDownLogic
