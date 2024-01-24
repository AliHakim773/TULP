import { sendRequest } from '../axios'

const authAPI = {
  login: async (data) => {
    const res = sendRequest({
      route: 'admin/auth/login',
      method: 'POST',
      body: data
    })
    return res
  },
  getUsers: async () => {
    const res = sendRequest({
      route: 'admin/user'
    })
    return res
  },
  getClasses: async () => {
    const res = sendRequest({
      route: 'admin/class'
    })
    return res
  },
  deleteUsers: async (data) => {
    const res = sendRequest({
      route: 'admin/user',
      method: 'DELETE',
      body: data
    })
    return res
  },
  deleteClasses: async (data) => {
    const res = sendRequest({
      route: 'admin/class',
      method: 'DELETE',
      body: data
    })
    return res
  }
}

export default authAPI
