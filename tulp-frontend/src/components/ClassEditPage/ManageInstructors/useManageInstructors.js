import { useLoaderData } from "react-router-dom"

const useManageInstructors = () => {
  const data = useLoaderData()
  return { data }
}

export default useManageInstructors
