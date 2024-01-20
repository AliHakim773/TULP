import { useNavigate } from "react-router-dom"
import Button from "../../components/Base/Button"
import NavBar from "../../components/UI/NavBar"
import HomeScreen from "../../components/VideoRoom/HomeScreen"
import "./styles.css"
import useVideoClassLogic from "./useVideoClassLogic"
import { DailyProvider } from "@daily-co/daily-react"
import HairCheck from "../../components/VideoRoom/HairCheck"

const VideoClass = () => {
  const navigate = useNavigate()

  const {
    showCall,
    showHairCheck,
    callObject,
    apiError,
    createCall,
    startHairCheck,
    startLeavingCall,
  } = useVideoClassLogic()

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
            // HariCheck
            <HairCheck joinCall={joinCall} cancelCall={startLeavingCall} />
          ) : (
            // Join Call
            <></>
          )}
        </DailyProvider>
      )
    }

    // The default view is the HomeScreen, from where we start the demo.
    return (
      <HomeScreen createCall={createCall} startHairCheck={startHairCheck} />
    )
  }

  return <div className='app'>{renderApp()}</div>
}

export default VideoClass
