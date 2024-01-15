import { useState } from "react"
import classAPI from "../../../core/api/class"
import { useParams } from "react-router-dom"

const useScheduleForm = () => {
  const { slug } = useParams()
  const [values, setValues] = useState({
    title: "",
    startTime: "",
    endTime: "",
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
      text: "Start Time",
      type: "datetime-local",
      placeholder: "01/01/2000 12:00 PM",
      id: "startTime",
      value: values.startTime,
      handleOnChange,
    },
    {
      text: "End Time",
      type: "datetime-local",
      placeholder: "01/01/2000 12:00 PM",
      id: "endTime",
      value: values.endTime,
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
    try {
      // TODO: test
      const res = await classAPI.addSchedule({
        slug,
        ...values,
      })
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  return { inputValues, handleOnClick }
}

export default useScheduleForm