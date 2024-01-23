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
import { roomAPI } from "../../../core/api/room"
import { useParams } from "react-router-dom"
import { socket } from "../../../core/socket"

const useHairCheckLogic = (joinCall) => {
  const localSessionId = useLocalSessionId()
  const { slug } = useParams()
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

  const handleJoin = async (e) => {
    e.preventDefault()
    try {
      await roomAPI.addParticipant({ slug, username: userName })
      socket.emit("room:update-participants", slug)
    } catch {}
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
