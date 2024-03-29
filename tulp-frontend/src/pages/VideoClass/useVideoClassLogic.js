// React imports
import { useCallback, useEffect, useState } from "react"
// My imports
import createRoom from "../../core/api/dailyco"
// Dailyco imports
import DailyIframe from "@daily-co/daily-js"
import useRoomUrlFromPageUrl from "../../core/hooks/useRoomUrlFromPageUrl"
import usePageUrlFromRoomUrl from "../../core/hooks/usePageUrlFromRoomUrl"
import { useNavigate, useParams } from "react-router-dom"
import { roomAPI } from "../../core/api/room"
import { socket } from "../../core/socket"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../core/redux/userSlice"

// Page state
const STATE_IDLE = "STATE_IDLE"
const STATE_CREATING = "STATE_CREATING"
const STATE_JOINING = "STATE_JOINING"
const STATE_JOINED = "STATE_JOINED"
const STATE_LEAVING = "STATE_LEAVING"
const STATE_ERROR = "STATE_ERROR"
const STATE_HAIRCHECK = "STATE_HAIRCHECK"

const useVideoClassLogic = () => {
  const { role, username } = useSelector(extractUserSlice)
  const navigate = useNavigate()
  const { slug } = useParams()
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
  const startLeavingCall = useCallback(async () => {
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
    if (role === "instructor") {
      try {
        await roomAPI.deleteRoom({ slug })
        await roomAPI.removeParticipant({ slug, username })
        socket.emit("room:create", "", async (msg) => {})
      } catch (e) {}
    }
    socket.emit("room:update-participants", slug)
    navigate(`/class/${slug}/stream`)
  }, [callObject, appState])

  useEffect(() => {
    const url = useRoomUrlFromPageUrl()
    if (url) {
      startHairCheck(url)
    }
  }, [startHairCheck])

  useEffect(() => {
    const pageUrl = usePageUrlFromRoomUrl(roomUrl)
    if (pageUrl === window.location.href) return
    window.history.replaceState(null, null, pageUrl)
  }, [roomUrl])

  useEffect(() => {
    if (!callObject) return

    const events = ["joined-meeting", "left-meeting", "error", "camera-error"]

    const handleNewMeetingState = () => {
      switch (callObject.meetingState()) {
        case "joined-meeting":
          setAppState(STATE_JOINED)
          break
        case "left-meeting":
          callObject.destroy().then(() => {
            setRoomUrl(null)
            setCallObject(null)
            setAppState(STATE_IDLE)
          })
          break
        case "error":
          setAppState(STATE_ERROR)
          break
        default:
          break
      }
    }

    handleNewMeetingState()

    events.forEach((event) => callObject.on(event, handleNewMeetingState))

    return () => {
      events.forEach((event) => callObject.off(event, handleNewMeetingState))
    }
  }, [callObject])

  const showCall =
    !apiError && [STATE_JOINING, STATE_JOINED, STATE_ERROR].includes(appState)

  const showHairCheck = !apiError && appState === STATE_HAIRCHECK

  return {
    showCall,
    showHairCheck,
    apiError,
    callObject,
    slug,
    createCall,
    startLeavingCall,
    startHairCheck,
    joinCall,
  }
}

export default useVideoClassLogic
