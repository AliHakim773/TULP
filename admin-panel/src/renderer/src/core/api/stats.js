import { sendRequest } from '../axios'

const statsAPI = {
  getUsersCount: async () => {
    const res = sendRequest({
      route: 'admin/user/count'
    })
    return res
  },
  getStudentsCount: async () => {
    const res = sendRequest({
      route: 'admin/students/count'
    })
    return res
  },
  getInstructorsCount: async () => {
    const res = sendRequest({
      route: 'admin/instructors/count'
    })
    return res
  }
}

export default statsAPI