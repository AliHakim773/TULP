import { sendRequest } from "../axios"

export const authAPI = {
  register: async (data) => {
    console.log(data)
    const response = await sendRequest({
      route: "auth/register",
      method: "POST",
      body: { ...data },
    })
    return response
  },
}
