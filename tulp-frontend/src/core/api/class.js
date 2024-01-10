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
}

export default classAPI
