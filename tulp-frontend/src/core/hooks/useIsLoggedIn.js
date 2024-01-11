import { useState } from "react"
import { local } from "../helpers/localstorage"

const useIsLoggedIn = () => {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const localToken = local("token")

    setToken(localToken)
  }, [])

  return [token !== null && token !== undefined]
}

export default useIsLoggedIn
