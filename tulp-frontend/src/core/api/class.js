import { sendRequest } from "../axios"

const classAPI = {
  add: async (data) => {
    const response = await sendRequest({
      route: "class",
      method: "POST",
      body: data,
    })
    return response
  },
  search: async (data) => {
    const response = await sendRequest({
      route: "class/search",
      method: "POST",
      body: data,
    })
    return response
  },
  getClassesIn: async () => {
    const response = await sendRequest({
      route: "class/in",
    })
    return response
  },
  addSchedule: async (data) => {
    const response = await sendRequest({
      route: "class/schedule",
      method: "POST",
      body: data,
    })
    return response
  },
  getClassProfile: async (slug) => {
    const response = await sendRequest({
      route: `class/${slug}/profile`,
    })
    return response
  },
}

export default classAPI
