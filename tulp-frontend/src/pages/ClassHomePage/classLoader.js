import { redirect } from "react-router-dom"
import classAPI from "../../core/api/class"
import { store } from "../../core/redux/store"

export const classLoader = async ({ params }) => {
  const { _id } = store.getState().user
  const res = await classAPI.get(params.slug)
  const isInstructor = res.class.instructors.some((instructor) => {
    return instructor._id === _id
  })
  const isStudnet = res.class.students.some((student) => {
    return student._id === _id
  })
  if (res.class.owner._id === _id || isInstructor || isStudnet) {
    return { res }
  }
  return redirect("/profile")
}
