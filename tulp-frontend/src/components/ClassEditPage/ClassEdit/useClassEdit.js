import { useState } from "react"
import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import classAPI from "../../../core/api/class"
import toast from "react-hot-toast"

const useClassEdit = () => {
  const { slug } = useParams()
  const data = useLoaderData()
  const [values, setValues] = useState(data)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const res = await classAPI.editClassProfile(slug, values)
      toast.success("Class Information Updated")
      console.log(res.slug)
      navigate(`/class/${res.slug}/edit`)
    } catch (e) {
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
