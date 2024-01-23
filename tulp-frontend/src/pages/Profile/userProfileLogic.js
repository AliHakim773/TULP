import { useSelector } from "react-redux"
import { extractUserSlice } from "../../core/redux/userSlice"
import { useLoaderData } from "react-router-dom"

const userProfileLogic = () => {
  const data = useLoaderData()
  const { aboutMe } = useSelector(extractUserSlice)
  return { data, aboutMe }
}

export default userProfileLogic
