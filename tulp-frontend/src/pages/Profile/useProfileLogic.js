import { useEffect, useState } from "react"
import classAPI from "../../core/api/class"

const useProfileLogic = () => {
  const [classes, setClasses] = useState([])
  useEffect(() => {
    const getClasses = async () => {
      const res = await classAPI.getClassesIn()
      setClasses(res.classes)
    }
    getClasses()
  }, [])

  return { classes }
}

export default useProfileLogic
