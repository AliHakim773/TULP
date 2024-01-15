import { useRef, useState } from "react"
import { userApi } from "../../core/api/user"
import classAPI from "../../core/api/class"
import toast from "react-hot-toast"

const useCreateClassFormLogic = () => {
  const [instructors, setInstructors] = useState([])
  const [name, setName] = useState("")

  const descriptionRef = useRef()

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
    instructors,
    descriptionRef,
    onNameChange,
    handleOnAccept,
    handleOnCreateClass,
    handleOnRemove,
  }
}

export default useCreateClassFormLogic
