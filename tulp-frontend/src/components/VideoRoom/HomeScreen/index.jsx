import { useLocation, useParams } from "react-router-dom"
import Button from "../../Base/Button"
import NavBar from "../../UI/NavBar"
import { socket } from "../../../core/socket"
import toast from "react-hot-toast"
import { roomAPI } from "../../../core/api/room"

const HomeScreen = ({ createCall, startHairCheck }) => {
  const { pathname } = useLocation()
  const { slug } = useParams()
  const startDemo = () => {
    createCall().then(async (url) => {
      startHairCheck(url)
      const roomUrl = pathname + "?roomUrl=" + url
      try {
        await roomAPI.createRoom({ slug, url: roomUrl })
        socket.emit("room:create", slug, (msg) => {})
      } catch (e) {}
    })
  }

  return (
    <div className='page'>
      <NavBar />
      <div className='home-screen flex column center'>
        <div className='join-btn'>
          <Button onclick={startDemo} text='Click to start the Class' />
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
