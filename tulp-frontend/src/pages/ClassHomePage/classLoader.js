import { redirect } from "react-router-dom"
import { store } from "../../core/redux/store"
import classAPI from "../../core/api/class"

export const classLoader = async ({ params }) => {
  const res = await classAPI.get(params.slug)

  return { res }
}
