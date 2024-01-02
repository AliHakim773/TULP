import { useEffect } from "react"
import { authAPI } from "../../../core/api/auth"
import { local } from "../../../core/helpers/localstorage"
import { useDispatch, useSelector } from "react-redux"
import { extractUserSlice, setUser } from "../../../core/redux/userSlice"

const useNavBarLogic = () => {
  const dispatch = useDispatch()
  const user = useSelector(extractUserSlice)
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
    }
    refresh()
  }, [])
  return { user, isLoggedIn, dispatch }
}

export default useNavBarLogic
