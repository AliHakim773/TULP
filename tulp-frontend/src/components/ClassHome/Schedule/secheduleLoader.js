import classAPI from "../../../core/api/class"
import saparateDates from "../../../core/helpers/saparateDates"

export const scheduleLoader = async ({ params }) => {
  const res = await classAPI.getSechdule(params.slug)
  return saparateDates(res.schedule)
}
