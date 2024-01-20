import { useCallback, useState } from "react"
import createRoom from "../../core/api/dailyco"

// page state
const STATE_IDLE = "STATE_IDLE"
const STATE_CREATING = "STATE_CREATING"
const STATE_JOINING = "STATE_JOINING"
const STATE_JOINED = "STATE_JOINED"
const STATE_LEAVING = "STATE_LEAVING"
const STATE_ERROR = "STATE_ERROR"
const STATE_HAIRCHECK = "STATE_HAIRCHECK"

const useVideoClassLogic = () => {
  const [appState, setAppState] = useState(STATE_IDLE)
  const [roomUrl, setRoomUrl] = useState(null)
  const [apiError, setApiError] = useState(false)

  const createCall = useCallback(() => {
    setAppState(STATE_CREATING)
    return createRoom()
      .then((room) => room.url)
      .catch((error) => {
        console.error("Error creating room", error)
        setRoomUrl(null)
        setAppState(STATE_IDLE)
        setApiError(true)
      })
  }, [])

  return {}
}

export default useVideoClassLogic
