import { useRef } from "react"
import toast from "react-hot-toast"
import { postAPI } from "../../../core/api/post"

const useComentFormLogic = (postId, setPosts) => {
  const commentRef = useRef()
  const handleOnClick = async () => {
    try {
      const res = await postAPI.comment({
        postId,
        content: commentRef.current.value,
      })
      setPosts((prev) => {
        return prev.map((post) => (post._id == res.post._id ? res.post : post))
      })
      commentRef.current.value = ""
    } catch (e) {
      toast.error("Error with comment")
    }
  }

  return { commentRef, handleOnClick }
}

export default useComentFormLogic
