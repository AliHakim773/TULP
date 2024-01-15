import { useState } from "react"
import classAPI from "../../core/api/class"
import { useNavigate } from "react-router-dom"

const useSearchClassLogic = () => {
  const navigate = useNavigate()
  const [result, setResult] = useState([])
  const handleSearch = async (e) => {
    const payload = e.target.value

    if (payload === "") {
      setResult([])
      return
    }

    const res = await classAPI.search({ payload })
    setResult(res.result)
  }
  return { handleSearch, result, navigate }
}

export default useSearchClassLogic
