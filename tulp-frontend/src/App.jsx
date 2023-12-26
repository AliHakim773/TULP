import LandingPage from "./pages/LandingPage"
import PageNotFound from "./pages/PageNotFound"
import "./styles/index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App