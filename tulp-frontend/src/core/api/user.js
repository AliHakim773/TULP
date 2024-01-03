import { sendRequest } from "../axios"

export const userApi = {
  edit: async (data) => {
    const response = await sendRequest({
      route: "user",
      method: "PATCH",
      body: data,
    })
    return response
  },
}
