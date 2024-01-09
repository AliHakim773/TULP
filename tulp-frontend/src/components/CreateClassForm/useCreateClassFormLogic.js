import { useState } from "react"
import { userApi } from "../../core/api/user"

const useCreateClassFormLogic = () => {
  const [result, setResult] = useState([])
  const handleInstructorSearch = async (e) => {
    const payload = e.target.value

    if (payload === "") {
      setResult([])
      return
    }
    const res = await userApi.searchInstructors({ payload })
    setResult(res.result)
  }

  const handleOnAccept = () => {}

  return { handleInstructorSearch, result, handleOnAccept }
}

export default useCreateClassFormLogic
