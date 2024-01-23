import { useNavigate } from "react-router-dom"
import Button from "../../components/Base/Button"
import NavBar from "../../components/UI/NavBar"
import HomeScreen from "../../components/VideoRoom/HomeScreen"
import "./styles.css"
import useVideoClassLogic from "./useVideoClassLogic"
import { DailyAudio, DailyProvider } from "@daily-co/daily-react"
import HairCheck from "../../components/VideoRoom/HairCheck"
import Call from "../../components/VideoRoom/Call"
import Tray from "../../components/VideoRoom/Tray"
import { useEffect, useState } from "react"
import CollabrativeCompiler from "../../components/CollabrativeCompiler"
import { socket } from "../../core/socket"

const VideoClass = () => {
  const navigate = useNavigate()
  const [showCompiler, setShowCompiler] = useState(false)

  const {
    showCall,
    showHairCheck,
    callObject,
    apiError,
    slug,
    createCall,
    startHairCheck,
    startLeavingCall,
    joinCall,
  } = useVideoClassLogic()

  useEffect(() => {
    socket.on("room:toggle-compiler", (value) => {
      setShowCompiler(value)
    })

    return () => {
      socket.removeListener("room:toggle-compiler", (showCompiler) => {})
    }
  }, [])

  const renderApp = () => {
    if (apiError) {
      return (
        <div className='page'>
          <NavBar />
          <div className='api-error flex column center'>
            <h1>Error</h1>
            <p>
              Room could not be created. Check if your `.env` file is set up
              correctly. For more information, see the{" "}
              <a href='https://github.com/daily-demos/custom-video-daily-react-hooks#readme'>
                readme
              </a>{" "}
              :)
            </p>
            <div className=''>
              <Button
                text='Go Back To Class Room'
                onclick={() => navigate(-1)}
              />
            </div>
          </div>
        </div>
      )
    }

    if (showHairCheck || showCall) {
      return (
        <DailyProvider callObject={callObject}>
          {showHairCheck ? (
            <HairCheck joinCall={joinCall} cancelCall={startLeavingCall} />
          ) : (
            <div className='page-call'>
              {showCompiler ? (
                <div className='compiler-section'>
                  <CollabrativeCompiler />
                </div>
              ) : (
                <Call />
              )}

              <Tray
                setShowCompiler={setShowCompiler}
                leaveCall={startLeavingCall}
              />
              <DailyAudio />
            </div>
          )}
        </DailyProvider>
      )
    }

    return (
      <HomeScreen createCall={createCall} startHairCheck={startHairCheck} />
    )
  }

  return <div className='app'>{renderApp()}</div>
}

export default VideoClass
