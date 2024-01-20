import { useState } from "react"

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
  return {}
}

export default useVideoClassLogic
