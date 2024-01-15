import { useState } from "react"
import { useLoaderData } from "react-router-dom"

const useClassEdit = () => {
  const data = useLoaderData()
  const [values, setValues] = useState(data)
  const handleSubmit = async () => {
    console.log(values)
  }
  const handleOnChange = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.id]: e.target.value }
    })
  }
  return { handleSubmit, handleOnChange, values }
}

export default useClassEdit
