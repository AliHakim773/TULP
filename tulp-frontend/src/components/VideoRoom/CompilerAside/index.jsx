import { useParams } from "react-router-dom"
import { socket } from "../../../core/socket"
import "./styles.css"

const CompilerAside = ({ showCode, toggleCode, setShowCompiler }) => {
  const { slug } = useParams()
  const handleShowCompiler = () => {
    setShowCompiler((prev) => {
      socket.emit("room:toggle-compiler", slug, !prev)
      return !prev
    })
  }

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
      </ul>
    </aside>
  ) : null
}

export default CompilerAside
