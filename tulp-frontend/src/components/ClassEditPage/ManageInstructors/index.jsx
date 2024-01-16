import { Outlet, useNavigate } from "react-router-dom"
import "./styles.css"
import Table from "../../UI/Table"
import Button from "../../Base/Button"
import useManageInstructors from "./useManageInstructors"

const ManageInstructors = () => {
  const { data } = useManageInstructors()
  const navigate = useNavigate()

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
      <Table users={data.instructors} />
    </div>
  )
}

export default ManageInstructors
