import { useEffect, useState } from "react"
import { authAPI } from "../../../core/api/auth"
import { local } from "../../../core/helpers/localstorage"
import { useDispatch } from "react-redux"
import { setUser } from "../../../core/redux/userSlice"

const navLinksLoggedOut = [
  {
    to: "/register",
    text: "Register",
    color: "orange",
  },
  {
    to: "/login",
    text: "Login",
    color: "blue",
  },
]
const navLinksLoggedIn = [
  {
    to: "/",
    text: "home",
    color: "blue",
  },
]
const navLinksClass = [
  {
    to: "/class/lol",
    text: "Class",
    color: "blue",
  },
]
const useNavBarLogic = () => {
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
  }, [])
  return { isLoggedIn, navLinks }
}

export default useNavBarLogic
