import { Outlet, useNavigate, useParams } from "react-router-dom"
import "./styles.css"
import Table from "../../UI/Table"
import Button from "../../Base/Button"
import useManageInstructors from "./useManageInstructors"
import toast from "react-hot-toast"
import classAPI from "../../../core/api/class"
import { useState } from "react"

const ManageInstructors = () => {
  const { data } = useManageInstructors()
  const { slug } = useParams()
  const navigate = useNavigate()
  const [insstructors, setInstructors] = useState(data.instructors)
  const removeInstructor = async (id, users) => {
    try {
      const res = await classAPI.removeClassInstructors(slug, {
        instructorId: id,
      })
      const ins = users.filter((user) => user._id !== id)
      setInstructors(ins)
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
      <Table users={insstructors} handleRemove={removeInstructor} />
    </div>
  )
}

export default ManageInstructors
