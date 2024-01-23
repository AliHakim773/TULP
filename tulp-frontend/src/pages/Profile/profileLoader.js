import classAPI from "../../core/api/class"

export const profileLoader = async ({ params }) => {
  if (params.slug) {
    return null
  } else {
    const res = await classAPI.getClassesIn()
    return res
  }
}
