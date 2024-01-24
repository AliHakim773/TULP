import { Navigate, Outlet } from "react-router-dom"
import { local } from "../../core/helpers/localstorage"

const AuthComponent = () => {
  const token = local("token")
  if (!token) return <Navigate to={"/"} />

  return <Outlet />
}

export default AuthComponent
