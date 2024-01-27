import { sendRequest } from '../axios'

const statsAPI = {
  getUsersCount: async () => {
    const res = sendRequest({
      route: 'admin/user/count'
    })
    return res
  },
  getClassesCount: async () => {
    const res = sendRequest({
      route: 'admin/class/count'
    })
    return res
  },
  getStudentsCount: async () => {
    const res = sendRequest({
      route: 'admin/students/count'
    })
    return res
  },
  getStudentsPerClassAVG: async () => {
    const res = sendRequest({
      route: 'admin/students/avg'
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
