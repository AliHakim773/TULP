import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import classAPI from "../../../../core/api/class"

const useStreamForm = () => {
  const navigate = useNavigate()
  const { slug } = useParams()
  const [file, setFile] = useState("")
  const [values, setValues] = useState({
    title: "",
    content: "",
  })

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value })
  }

  const handleOnFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const inputValues = [
    {
      text: "Title",
      type: "text",
      placeholder: "Post Title",
      id: "title",
      value: values.title,
      handleOnChange,
    },
    {
      text: "Content",
      type: "text",
      placeholder: "Solve Problems",
      id: "content",
      value: values.content,
      handleOnChange,
    },
  ]

  const handleOnClick = async () => {
    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("title", values.title)
      formData.append("content", values.content)
      await classAPI.post(slug, formData)
      toast.success("Posted")
      navigate(-1)
    } catch (e) {
      console.log(e)
    }
  }

  return { handleOnFileChange, inputValues, handleOnClick }
}

export default useStreamForm
