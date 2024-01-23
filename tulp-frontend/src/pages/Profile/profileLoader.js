import classAPI from "../../core/api/class"

export const profileLoader = async ({ params }) => {
  if (params.username) {
    const res = await classAPI.getUserProfile(params.username)
    return res
  } else {
    const res = await classAPI.getClassesIn()
    return res
  }
}
