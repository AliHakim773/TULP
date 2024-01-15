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
  addSchedule: async () => {
    const response = await sendRequest({
      route: "class/schedule",
      method: "POST",
      body: data,
    })
    return response
  },
}

export default classAPI
