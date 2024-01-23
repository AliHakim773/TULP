import { Editor } from "@monaco-editor/react"
import "./styles.css"
import { useRef, useState } from "react"
import { Doc } from "yjs"
import { WebrtcProvider } from "y-webrtc"
import { MonacoBinding } from "y-monaco"
import axios from "axios"
import "./styles.css"
import { useParams } from "react-router-dom"

const CollabrativeCompiler = ({ isdisabled = false }) => {
  const { slug } = useParams()
  const [output, setOutput] = useState("// Output here")

  const [lang, setLang] = useState("python")
  const handleLangChange = (e) => {
    setLang(e.target.value)
  }

  const [input, setInput] = useState("")
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const [value, setValue] = useState("// Start Coding")
  const editorRef = useRef(null)

  const handleOnChange = (text, event) => {
    setValue(text)
  }
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor

    const doc = new Doc()

    const provider = new WebrtcProvider(slug, doc)
    const type = doc.getText("monaco")

    const binding = new MonacoBinding(
      type,
      editorRef.current.getModel(),
      new Set([editorRef.current]),
      provider.awareness
    )
  }

  const handleOnCompaileClick = async () => {
    try {
      const response = await axios.request({
        url: "http://localhost:8000/compile",
        method: "POST",
        data: { lang, content: value },
        headers: {
          "Content-Type": "application/json",
        },
      })
      setOutput(response.data.output.stdout)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <dev className='compiler'>
      <div className='editor'>
        <Editor
          theme='vs-dark'
          onMount={handleEditorDidMount}
          options={{
            minimap: { enabled: false },
            tabSize: 2,
            readOnly: isdisabled,
          }}
          value={value}
          onChange={handleOnChange}
        />
      </div>
      <div className='editor-actions'>
        <pre className='output'>{output}</pre>
        <input onChange={handleInputChange} type='text' />
        <button onClick={handleOnCompaileClick}>Compile</button>
        <div className='choose-lang'>
          <label htmlFor='lang'>Choose Language:</label>
          <select onChange={handleLangChange} name='lang' id='lang'>
            <option defaultValue={true} value='python'>
              Python
            </option>
            <option value='javascript'>Javascript</option>
          </select>
        </div>
      </div>
    </dev>
  )
}

export default CollabrativeCompiler
