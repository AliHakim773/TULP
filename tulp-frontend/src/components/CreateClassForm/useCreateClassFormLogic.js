import { useRef, useState } from "react"
import { userApi } from "../../core/api/user"
import classAPI from "../../core/api/class"
import toast from "react-hot-toast"

const useCreateClassFormLogic = () => {
  const [result, setResult] = useState([])
  const [instructors, setInstructors] = useState([])
  const [name, setName] = useState("")

  const descriptionRef = useRef()
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

  const onNameChange = (e) => {
    setName(e.target.value)
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

  const handleOnRemove = (instructorToRemove) => {
    setInstructors((prev) => {
      return prev.filter(
        (instructor) => instructor._id !== instructorToRemove._id
      )
    })
  }

  const handleOnCreateClass = async () => {
    const res = await classAPI.add({
      name,
      description: descriptionRef.current.value,
      instructors,
    })
    toast.success("Class Created")
  }

  return {
    result,
    instructors,
    instructorRef,
    descriptionRef,
    onNameChange,
    handleInstructorSearch,
    handleOnAccept,
    handleOnCreateClass,
    handleOnRemove,
  }
}

export default useCreateClassFormLogic
