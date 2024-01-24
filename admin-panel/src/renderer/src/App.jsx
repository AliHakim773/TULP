// css
import './styles/index.css'

// react router
import { RouterProvider } from 'react-router-dom'
import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom'

// auth
import LoginPage from './pages/LoginPage'
import AuthLayout from './components/Layouts/AuthLayout'

// pages
import HomePage from './pages/HomePage'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LoginPage />} />
      <Route element={<AuthLayout />}>
        <Route path="home" element={<HomePage />}></Route>
      </Route>
    </Route>
  )
)

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
