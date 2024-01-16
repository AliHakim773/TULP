import { useLoaderData } from "react-router-dom"
import classAPI from "../../../core/api/class"

const useManageInstructors = () => {
  const data = useLoaderData()
  return { data }
}

export default useManageInstructors

export const manageInstructorsLoader = async ({ params }) => {
  const res = await classAPI.getClassInstructors(params.slug)
  return res
}
