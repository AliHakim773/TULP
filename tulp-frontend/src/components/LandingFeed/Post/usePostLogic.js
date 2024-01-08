import { useState } from "react"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../../core/redux/userSlice"
import { postAPI } from "../../../core/api/post"

const usePostLogic = (likes, postId, currentId) => {
  const { _id } = useSelector(extractUserSlice)
  const [isLiked, toggleIsLiked] = useState(likes.includes(_id))
  const [likesCount, setLikesCount] = useState(likes.length)

  const handleOnLike = async () => {
    let data
    if (postId) {
      data = {
        postId,
        commentId: currentId,
      }
    } else {
      data = {
        postId: currentId,
      }
    }
    const res = await postAPI.like(data)
    setLikesCount(res.likes.length)
    toggleIsLiked(res.likes.includes(_id))
  }

  return { isLiked, handleOnLike, likesCount }
}

export default usePostLogic
