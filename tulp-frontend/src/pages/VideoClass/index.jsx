import HomeScreen from "../../components/VideoRoom/HomeScreen"
import "./styles.css"
import useVideoClassLogic from "./useVideoClassLogic"
import { DailyProvider } from "@daily-co/daily-react"

const VideoClass = () => {
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
    // The default view is the HomeScreen, from where we start the demo.
    return (
      <HomeScreen createCall={createCall} startHairCheck={startHairCheck} />
    )
  }

  return <div className='app'>{renderApp()}</div>
}

export default VideoClass
