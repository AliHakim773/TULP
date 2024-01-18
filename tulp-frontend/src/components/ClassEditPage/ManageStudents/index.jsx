import { useLoaderData, useParams } from "react-router-dom"
import "./styles.css"
import Table from "../../UI/Table"
import classAPI from "../../../core/api/class"
import toast from "react-hot-toast"

const ManageStudents = () => {
  const data = useLoaderData()
  const { slug } = useParams()
  const [students, setStudents] = useState(data.students)

  const removeStudent = async (id, users) => {
    try {
      const res = await classAPI.removeClassStudent(slug, {
        studentId: id,
      })
      const studs = users.filter((user) => user._id !== id)
      setStudents(studs)
      toast.success(res.message)
    } catch (e) {
      console.log(e)
      toast.error("There was an error")
    }
  }

  return (
    <div className='instructors-table'>
      <Table users={students} handleRemove={removeStudent} />
    </div>
  )
}

export default ManageStudents
