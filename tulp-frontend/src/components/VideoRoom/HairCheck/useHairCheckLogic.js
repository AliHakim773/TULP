import {
  useDaily,
  useDailyEvent,
  useDevices,
  useLocalSessionId,
  useParticipantProperty,
} from "@daily-co/daily-react"
import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../../core/redux/userSlice"

const useHairCheckLogic = (joinCall) => {
  const localSessionId = useLocalSessionId()
  const { username: userName } = useSelector(extractUserSlice)
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
  const [username, setUsername] = useState(userName)

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
    username,
    localSessionId,
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
