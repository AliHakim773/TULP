// React imports
import { useCallback, useState } from "react"
// My imports
import createRoom from "../../core/api/dailyco"
// Dailyco imports
import DailyIframe from "@daily-co/daily-js"

// Page state
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
  const [callObject, setCallObject] = useState(null)

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

  const startHairCheck = useCallback(async (url) => {
    const newCallObject = DailyIframe.createCallObject()
    setRoomUrl(url)
    setCallObject(newCallObject)
    setAppState(STATE_HAIRCHECK)
    await newCallObject.preAuth({ url })
    await newCallObject.startCamera()
  }, [])

  const joinCall = useCallback(
    (userName) => {
      callObject.join({ url: roomUrl, userName })
    },
    [callObject, roomUrl]
  )

  const startLeavingCall = useCallback(() => {
    if (!callObject) return

    if (appState === STATE_ERROR) {
      callObject.destroy().then(() => {
        setRoomUrl(null)
        setCallObject(null)
        setAppState(STATE_IDLE)
      })
    } else {
      setAppState(STATE_LEAVING)
      callObject.leave()
    }
  }, [callObject, appState])

  return {}
}

export default useVideoClassLogic
