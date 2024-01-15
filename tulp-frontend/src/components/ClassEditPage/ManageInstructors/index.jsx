import { useLoaderData } from "react-router-dom"
import classAPI from "../../../core/api/class"
import "./styles.css"
import Table from "../../UI/Table"

const ManageInstructors = () => {
  const data = useLoaderData()
  return (
    <div className='instructors-table'>
      <Table users={data.instructors} />
    </div>
  )
}

export default ManageInstructors

export const manageInstructorsLoader = async ({ params }) => {
  const res = await classAPI.getClassInstructors(params.slug)
  return res
}
