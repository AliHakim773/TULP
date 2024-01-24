// css
import './styles/index.css'

// react router
import { RouterProvider } from 'react-router-dom'
import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom'

// auth
import LoginPage from './pages/LoginPage'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LoginPage />} />
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
