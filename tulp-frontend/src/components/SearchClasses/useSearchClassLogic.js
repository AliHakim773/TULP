import { useState } from "react"
import classAPI from "../../core/api/class"

const useSearchClassLogic = () => {
  const [result, setResult] = useState([])
  const handleSearch = async (e) => {
    const payload = e.target.value

    if (payload === "") {
      setResult([])
      return
    }

    const res = await classAPI.search({ payload })
    setResult(res.result)
    console.log(res.result)
  }
  return { handleSearch, result }
}

export default useSearchClassLogic
