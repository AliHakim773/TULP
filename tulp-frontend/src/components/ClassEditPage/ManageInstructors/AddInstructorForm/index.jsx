import { useNavigate, useParams } from "react-router-dom"
import SearchInstructor from "../../../SearchInstructor"
import "./styles.css"
import toast from "react-hot-toast"
import classAPI from "../../../../core/api/class"
const AddInstructorForm = () => {
  const navigate = useNavigate()
  const { slug } = useParams()
  const handleOnAccept = async (instructor) => {
    try {
      const res = await classAPI.addClassInstructors(slug, {
        instructorId: instructor._id,
      })
      toast.success(res.message)
    } catch (e) {
      toast.error("There was an error")
    }
    navigate(-1)
  }
  return (
    <div className='add-inst-form'>
      <SearchInstructor handleOnAccept={handleOnAccept} label={false} />
    </div>
  )
}

export default AddInstructorForm
