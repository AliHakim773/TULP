import axios from "axios"
import { sendRequest } from "../axios"
import { local } from "../helpers/localstorage"

const classAPI = {
  add: async (data) => {
    const response = await sendRequest({
      route: "class",
      method: "POST",
      body: data,
    })
    return response
  },
  get: async (slug) => {
    const response = await sendRequest({
      route: `class/${slug}`,
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
  editClassProfile: async (slug, data) => {
    const response = await sendRequest({
      route: `class/${slug}/profile`,
      method: "PATCH",
      body: data,
    })
    return response
  },
  getClassInstructors: async (slug) => {
    const response = await sendRequest({
      route: `class/${slug}/instructors`,
    })
    return response
  },
  addClassInstructors: async (slug, data) => {
    const response = await sendRequest({
      route: `class/${slug}/instructors`,
      method: "POST",
      body: data,
    })
    return response
  },
  removeClassInstructors: async (slug, data) => {
    const response = await sendRequest({
      route: `class/${slug}/instructors`,
      method: "DELETE",
      body: data,
    })
    return response
  },
  requestToJoin: async (data) => {
    const response = await sendRequest({
      route: `class/request-to-join`,
      method: "POST",
      body: data,
    })
    return response
  },
  requestToJoin: async (slug) => {
    const response = await sendRequest({
      route: `class/${slug}/get-request`,
    })
    return response
  },
  acceptRequest: async (slug, data) => {
    const response = await sendRequest({
      route: `class/${slug}/accept-request`,
      method: "POST",
      body: data,
    })
    return response
  },
  rejectRequest: async (slug, data) => {
    const response = await sendRequest({
      route: `class/${slug}/reject-request`,
      method: "POST",
      body: data,
    })
    return response
  },
  getStudents: async (slug) => {
    const response = await sendRequest({
      route: `class/${slug}/students`,
    })
    return response
  },
  removeClassStudent: async (slug, data) => {
    const response = await sendRequest({
      route: `class/${slug}/students`,
      method: "DELETE",
      body: data,
    })
    return response
  },
  post: async (slug, data) => {
    const token = local("token")

    const response = await axios.request({
      url: `class/${slug}/feed`,
      method: "POST",
      data,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    })

    return response.data
  },
  getClassFeed: async (slug) => {
    const response = await sendRequest({
      route: `class/${slug}/feed`,
    })
    return response
  },
  addAssignment: async (slug, data) => {
    const token = local("token")

    const response = await axios.request({
      url: `class/${slug}/assignment`,
      method: "POST",
      data,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    })

    return response.data
  },
  getClassAssignments: async (slug) => {
    const response = await sendRequest({
      route: `class/${slug}/assignment`,
    })
    return response
  },
  getAssignment: async (slug) => {
    const response = await sendRequest({
      route: `class/assignment/${slug}`,
    })
    return response
  },
  submitAssignment: async (id, data) => {
    const token = local("token")
    const response = await axios.request({
      url: `class/assignment/${id}`,
      method: "POST",
      data,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    })
    return response.data
  },
  getSechdule: async (slug) => {
    const response = await sendRequest({
      route: `class/schedule/${slug}`,
    })
    return response
  },
}

export default classAPI
