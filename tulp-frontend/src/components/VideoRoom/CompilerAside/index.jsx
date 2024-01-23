import { useParams } from "react-router-dom"
import { socket } from "../../../core/socket"
import "./styles.css"
import {
  useLocalSessionId,
  useParticipantProperty,
} from "@daily-co/daily-react"
import { useEffect, useState } from "react"

const CompilerAside = ({ showCode, toggleCode, setShowCompiler }) => {
  const { slug } = useParams()
  const [participants, setParticipants] = useState([])
  const localSessionId = useLocalSessionId()
  const handleShowCompiler = () => {
    setShowCompiler((prev) => {
      socket.emit("room:toggle-compiler", slug, !prev)
      return !prev
    })
  }

  const handleParticipantToggle = (e) => {
    socket.emit("room:toggle-participants", slug, e.target.checked)
  }

  useEffect(() => {
    if (!socket.hasListeners("room:update-participants")) {
      socket.on("room:update-participants", (value) => {
        setParticipants(value)
      })
    }
    return () => {
      socket.removeListener("room:update-participants", (value) => {
        setParticipants(value)
      })
    }
  }, [])

  return showCode ? (
    <aside className='video-chat flex column shadow'>
      <button onClick={toggleCode} className='close-chat' type='button'>
        Close
      </button>
      <ul className='compiler-list flex column'>
        <li>
          <span>Start Compiler</span>
          <label class='switch'>
            <input type='checkbox' onChange={handleShowCompiler} />
            <span class='slider'></span>
          </label>
        </li>
        {/* <li>
          <h4>Permissions</h4>
        </li>
        {participants &&
          participants.map((p) => {
            return (
              <li key={p}>
                <span>{p}</span>
                <label class='switch'>
                  <input type='checkbox' onChange={handleParticipantToggle} />
                  <span class='slider'></span>
                </label>
              </li>
            )
          })} */}
      </ul>
    </aside>
  ) : null
}

export default CompilerAside
