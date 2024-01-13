import { useEffect, useState } from "react"
import { authAPI } from "../../../core/api/auth"
import { local } from "../../../core/helpers/localstorage"
import { useDispatch } from "react-redux"
import { setUser } from "../../../core/redux/userSlice"
import { useLocation } from "react-router-dom"

const navLinksLoggedOut = [
  {
    to: "/register",
    text: "Register",
  },
  {
    to: "/login",
    text: "Login",
  },
]
const navLinksLoggedIn = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/class/asd",
    text: "Class",
  },
]
const useNavBarLogic = () => {
  const { pathname } = useLocation()
  const [navLinks, setNavLinks] = useState(navLinksLoggedOut)
  const dispatch = useDispatch()

  let isLoggedIn =
    local("token") == null || local("token") == undefined ? false : true

  useEffect(() => {
    const refresh = async () => {
      try {
        const res = await authAPI.refresh()
        local("token", `Bearer ${res.token}`)
        dispatch(setUser(res.user))
      } catch (e) {
        console.log(e)
      }
      isLoggedIn =
        local("token") == null || local("token") == undefined ? false : true
      if (isLoggedIn) setNavLinks(navLinksLoggedIn)
      else setNavLinks(navLinksLoggedOut)
    }
    if (isLoggedIn) refresh()
  }, [pathname])
  return { isLoggedIn, navLinks }
}

export default useNavBarLogic
