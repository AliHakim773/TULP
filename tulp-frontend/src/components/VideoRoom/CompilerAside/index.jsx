import "./styles.css"
import {
  useLocalSessionId,
  useParticipantProperty,
} from "@daily-co/daily-react"

const CompilerAside = ({ showCode, toggleCode, setShowCompiler }) => {
  const localSessionId = useLocalSessionId()
  const handleShowCompiler = () => {
    setShowCompiler((prev) => !prev)
  }
  const username = useParticipantProperty(localSessionId, "user_name")

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
        <li>
          <h4>Permissions</h4>
        </li>
        <li>
          <span>Start Compiler</span>
          <label class='switch'>
            <input type='checkbox' />
            <span class='slider'></span>
          </label>
        </li>
        <li>
          <span>Start Compiler</span>
          <label class='switch'>
            <input type='checkbox' />
            <span class='slider'></span>
          </label>
        </li>
      </ul>
    </aside>
  ) : null
}

export default CompilerAside
