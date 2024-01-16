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

const loading_class = [
  {
    _id: "skdjuhf",
    owner: { username: "Ali" },
    name: "Computer Bro",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius eaque corporis consequuntur rem numquam similique nesciunt non, autem quasi labore quibusdam dolorum. Quia libero nostrum, quod nemo minus ullam ad odit amet repellat repellendus. Voluptatem tempore aliquam quasi qui?",
  },
  {
    _id: "skdjasdasduhf",
    owner: { username: "Mohamad" },
    name: "Electrical Bro",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius eaque corporis consequuntur rem numquam similique nesciunt non, autem quasi labore quibusdam dolorum. Quia libero nostrum, quod nemo minus ullam ad odit amet repellat repellendus. Voluptatem tempore aliquam quasi qui?",
  },
  {
    _id: "skdjasddasdaasduhf",
    owner: { username: "Nour" },
    name: "English Bro",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius eaque corporis consequuntur rem numquam similique nesciunt non, autem quasi labore quibusdam dolorum. Quia libero nostrum, quod nemo minus ullam ad odit amet repellat repellendus. Voluptatem tempore aliquam quasi qui?",
  },
]
