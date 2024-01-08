import { useRef } from "react"
import { postAPI } from "../../../core/api/post"
import toast from "react-hot-toast"

const usePostFieldLogic = () => {
  const postRef = useRef()
  const handleonClick = async () => {
    try {
      const res = await postAPI.post({ content: postRef.current.value })
      toast.success("Post Successful")
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
  return { postRef, handleonClick }
}
export default usePostFieldLogic
