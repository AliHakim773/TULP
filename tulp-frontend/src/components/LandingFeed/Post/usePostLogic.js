import { useState } from "react"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../../core/redux/userSlice"

const usePostLogic = (likes) => {
  const { _id } = useSelector(extractUserSlice)
  const [isLiked, toggleIsLiked] = useState(likes.includes(_id))

  const handleOnLike = () => {
    if (likes.includes(_id)) {
      likes.pop(_id)
    } else {
      likes.push(_id)
    }
    toggleIsLiked(!isLiked)
  }

  return { isLiked, handleOnLike, likesCount: likes.length }
}

export default usePostLogic
