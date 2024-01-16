import { Outlet, useNavigate, useParams } from "react-router-dom"
import "./styles.css"
import Table from "../../UI/Table"
import Button from "../../Base/Button"
import useManageInstructors from "./useManageInstructors"
import toast from "react-hot-toast"
import classAPI from "../../../core/api/class"

const ManageInstructors = () => {
  const { data } = useManageInstructors()
  const { slug } = useParams()
  const navigate = useNavigate()
  const removeInstructor = async (id) => {
    try {
      const res = await classAPI.removeClassInstructors(slug, {
        instructorId: id,
      })
      toast.success(res.message)
    } catch (e) {
      toast.error("There was an error")
    }
  }

  return (
    <div className='instructors-table'>
      <Outlet />
      <div className='instructors-header'>
        <div className='instructors-add-btn flex'>
          <Button
            text='Add'
            onclick={() => {
              navigate("add")
            }}
          />
        </div>
      </div>
      <Table users={data.instructors} handleRemove={removeInstructor} />
    </div>
  )
}

export default ManageInstructors
