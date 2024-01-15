import { useState } from "react"

const useClassEdit = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
  })
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
