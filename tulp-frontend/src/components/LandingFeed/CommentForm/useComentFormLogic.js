import { useRef } from "react"
import toast from "react-hot-toast"
import { postAPI } from "../../../core/api/post"

const useComentFormLogic = (postId) => {
  const commentRef = useRef()
  const handleOnClick = async () => {
    try {
      await postAPI.comment({
        postId,
        content: commentRef.current.value,
      })
      commentRef.current.value = ""
    } catch (e) {
      toast.error("Error with comment")
    }
  }

  return { commentRef, handleOnClick }
}

export default useComentFormLogic
