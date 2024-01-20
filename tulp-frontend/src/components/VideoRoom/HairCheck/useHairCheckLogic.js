import {
  useDaily,
  useDailyEvent,
  useLocalSessionId,
  useParticipantProperty,
} from "@daily-co/daily-react"
import { useEffect, useState } from "react"

const useHairCheckLogic = (joinCall) => {
  const localSessionId = useLocalSessionId()
  const initialUsername = useParticipantProperty(localSessionId, "user_name")
  const {
    currentCam,
    currentMic,
    currentSpeaker,
    microphones,
    speakers,
    cameras,
    setMicrophone,
    setCamera,
    setSpeaker,
  } = useDevices()
  const callObject = useDaily()
  const [username, setUsername] = useState(initialUsername)

  const [getUserMediaError, setGetUserMediaError] = useState(false)

  useEffect(() => {
    setUsername(initialUsername)
  }, [initialUsername])

  useDailyEvent(
    "camera-error",
    useCallback(() => {
      setGetUserMediaError(true)
    }, [])
  )

  const handleChange = (e) => {
    setUsername(e.target.value)
    callObject.setUserName(e.target.value)
  }

  const handleJoin = (e) => {
    e.preventDefault()
    joinCall(username.trim())
  }

  const updateMicrophone = (e) => {
    setMicrophone(e.target.value)
  }

  const updateSpeakers = (e) => {
    setSpeaker(e.target.value)
  }

  const updateCamera = (e) => {
    setCamera(e.target.value)
  }

  return {
    updateCamera,
    updateSpeakers,
    updateMicrophone,
    handleJoin,
    handleChange,
    getUserMediaError,
    speakers,
    cameras,
    microphones,
    currentSpeaker,
    currentMic,
    currentCam,
  }
}

export default useHairCheckLogic
