import { useRef } from "react"
import { postAPI } from "../../../core/api/post"
import toast from "react-hot-toast"

const usePostFieldLogic = () => {
  const postRef = useRef()
  const handleonClick = async () => {
    try {
      await postAPI.post({ content: postRef.current.value })
      toast.success("Post Successful")
      postRef.current.value = ""
      // TODO make post show when click not when reload
    } catch (e) {
      toast.error("There was an arror with your post")
      console.log(e)
    }
  }
  return { postRef, handleonClick }
}
export default usePostFieldLogic
