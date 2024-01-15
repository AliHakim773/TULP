import { useRef, useState } from "react"
import { userApi } from "../../core/api/user"

const useInstrucorSearch = () => {
  const [result, setResult] = useState([])

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

  return { setResult, handleInstructorSearch, result, instructorRef }
}

export default useInstrucorSearch
