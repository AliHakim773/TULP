import { useNavigate } from "react-router-dom"
import SearchInstructor from "../../../SearchInstructor"
import "./styles.css"
const AddInstructorForm = () => {
  const navigate = useNavigate()
  const handleOnAccept = async (instructor) => {
    console.log(instructor)
    // TODO: Add the instructor
    navigate(-1)
  }
  return (
    <div className='add-inst-form'>
      <SearchInstructor handleOnAccept={handleOnAccept} label={false} />
    </div>
  )
}

export default AddInstructorForm
