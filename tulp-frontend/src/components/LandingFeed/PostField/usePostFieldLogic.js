import { useRef } from "react"
import { postAPI } from "../../../core/api/post"
import toast from "react-hot-toast"

const usePostFieldLogic = (setPosts) => {
  const postRef = useRef()
  const handleonClick = async () => {
    try {
      const res = await postAPI.post({ content: postRef.current.value })
      setPosts((prev) => [...prev, res.post])
      toast.success("Post Successful")
      postRef.current.value = ""
    } catch (e) {
      toast.error("There was an arror with your post")
      console.log(e)
    }
  }
  return { postRef, handleonClick }
}
export default usePostFieldLogic
