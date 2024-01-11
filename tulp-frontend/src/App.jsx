import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./core/redux/store"
import { Toaster } from "react-hot-toast"

import "./styles/index.css"

import LandingPage from "./pages/LandingPage"
import PageNotFound from "./pages/PageNotFound"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import EditProfile from "./pages/EditProfile"
import Profile from "./pages/Profile"
import CreateClass from "./pages/CreateClass"
import ClassHomePage from "./pages/ClassHomePage"
import BasicLayout from "./components/UI/BasicLayout"

const router = createBrowserRouter([
  {
    element: <BasicLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/profile/:id?",
        element: <Profile />,
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
      },
      {
        path: "/create-class",
        element: <CreateClass />,
      },
    ],
  },
  {
    element: <BasicLayout />,
    children: [
      {
        path: "/class/:slug",
        element: <ClassHomePage />,
      },
    ],
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
])

const App = () => {
  return (
    <div className='app'>
      <div>
        <Toaster />
      </div>
      <Provider store={store}>
        <RouterProvider router={router} />
        {/* <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/profile/:id?' element={<Profile />} />
            <Route path='/edit-profile' element={<EditProfile />} />
            <Route path='/create-class' element={<CreateClass />} />
            <Route path='/class/:slug' element={<ClassHomePage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter> */}
      </Provider>
    </div>
  )
}

export default App
