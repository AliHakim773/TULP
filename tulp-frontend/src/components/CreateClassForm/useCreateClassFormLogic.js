import { useRef, useState } from "react"
import { userApi } from "../../core/api/user"

const useCreateClassFormLogic = () => {
  const [result, setResult] = useState([])
  const [instructors, setInstructors] = useState([])
  const instructorRef = useRef()

  const handleInstructorSearch = async () => {
    const payload = instructorRef.current.value

    if (payload === "") {
      setResult([])
      return
    }
    const res = await userApi.searchInstructors({ payload })
    setResult(res.result)
  }

  const handleOnAccept = (instructor) => {
    if (
      !instructors.some(
        (existingInstructor) => existingInstructor._id === instructor._id
      )
    ) {
      setInstructors((prev) => {
        return [...prev, instructor]
      })
    }
    setResult([])
    instructorRef.current.value = ""
  }

  return {
    result,
    instructors,
    instructorRef,
    handleInstructorSearch,
    handleOnAccept,
  }
}

export default useCreateClassFormLogic
