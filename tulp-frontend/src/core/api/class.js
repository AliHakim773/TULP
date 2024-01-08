import { sendRequest } from "../axios"

const classAPI = {
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
