import { Provider } from "react-redux"
import LandingPage from "./pages/LandingPage"
import PageNotFound from "./pages/PageNotFound"
import RegisterPage from "./pages/RegisterPage"
import "./styles/index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { store } from "./core/redux/store"
import LoginPage from "./pages/LoginPage"

const App = () => {
  return (
    <div className='app'>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
