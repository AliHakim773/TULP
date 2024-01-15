import { useLoaderData } from "react-router-dom"
import classAPI from "../../../core/api/class"
import "./styles.css"

const ManageInstructors = () => {
  const data = useLoaderData()
  return <div className='w-100'>{JSON.stringify(data)}</div>
}

export default ManageInstructors

export const manageInstructorsLoader = async ({ params }) => {
  const res = await classAPI.getClassInstructors(params.slug)
  return res
}
