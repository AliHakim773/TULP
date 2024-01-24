import authAPI from '../../core/api/auth'

export const classLoader = async () => {
  const res = await authAPI.getClasses()
  return res
}
