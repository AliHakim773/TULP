import { sendRequest } from "../axios"

export const roomAPI = {
  compile: async (data) => {
    const response = await sendRequest({
      route: "compile",
      method: "POST",
      body: data,
    })
    return response
  },
  createRoom: async (data) => {
    const response = await sendRequest({
      route: "compile/create-room",
      method: "POST",
      body: data,
    })
    return response
  },
  deleteRoom: async (data) => {
    const response = await sendRequest({
      route: "compile/delete-room",
      method: "POST",
      body: data,
    })
    return response
  },
  addParticipant: async (data) => {
    const response = await sendRequest({
      route: "compile/add-participant",
      method: "POST",
      body: data,
    })
    return response
  },
  removeParticipant: async (data) => {
    const response = await sendRequest({
      route: "compile/remove-participant",
      method: "POST",
      body: data,
    })
    return response
  },
}
