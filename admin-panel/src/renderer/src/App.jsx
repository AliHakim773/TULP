// css
import './styles/index.css'

// react router
import { Navigate, RouterProvider } from 'react-router-dom'
import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom'

// auth
import LoginPage from './pages/LoginPage'
import AuthLayout from './components/Layouts/AuthLayout'

// layouts
import NavLayout from './components/Layouts/NavLayout'

// pages
import HomePage from './pages/HomePage'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LoginPage />} />
      <Route element={<AuthLayout />} errorElement={<Navigate to={'/home'} />}>
        <Route element={<NavLayout />}>
          <Route path="home" element={<HomePage />}></Route>
        </Route>
      </Route>
      <Route path="/*" element={<Navigate to={'/home'} />} />
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
