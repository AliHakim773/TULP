import { sendRequest } from "../axios"

export const postAPI = {
  get: async () => {
    const response = await sendRequest({
      route: "post",
      method: "GET",
    })
    return response
  },
}
