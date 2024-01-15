import { useState } from "react"

const useScheduleForm = () => {
  const [values, setValues] = useState({
    title: "",
    from: "",
    to: "",
    description: "",
  })

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value })
  }

  const inputValues = [
    {
      text: "Title",
      type: "text",
      placeholder: "Class Name",
      id: "title",
      value: values.title,
      handleOnChange,
    },
    {
      text: "From",
      type: "datetime-local",
      placeholder: "01/01/2000 12:00 PM",
      id: "from",
      value: values.from,
      handleOnChange,
    },
    {
      text: "To",
      type: "datetime-local",
      placeholder: "01/01/2000 12:00 PM",
      id: "to",
      value: values.to,
      handleOnChange,
    },
    {
      text: "Description",
      type: "text",
      placeholder: "Learn",
      id: "description",
      value: values.description,
      handleOnChange,
    },
  ]

  const handleOnClick = async () => {
    console.log(values)
  }

  return { inputValues, handleOnClick }
}

export default useScheduleForm
