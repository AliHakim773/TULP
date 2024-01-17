import { redirect } from "react-router-dom"
import { store } from "../../core/redux/store"
import classAPI from "../../core/api/class"

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
  return redirect(`/class-profile/${res.class.slug}`)
}
