import { useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import classAPI from "../../../core/api/class"
import toast from "react-hot-toast"

const useClassEdit = () => {
  const { slug } = useParams()
  const data = useLoaderData()
  const [values, setValues] = useState(data)
  const handleSubmit = async () => {
    console.log(values)
    try {
      const res = await classAPI.editClassProfile(slug, values)
      toast.success("Class Information Updated")
    } catch (e) {
      console.log(e)
      toast.error("There was an error")
    }
  }
  const handleOnChange = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.id]: e.target.value }
    })
  }
  return { handleSubmit, handleOnChange, values }
}

export default useClassEdit
