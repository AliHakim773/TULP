import BasicLayout from "../../components/UI/BasicLayout"
import LandingPage from "../../pages/LandingPage"
import PageNotFound from "../../pages/PageNotFound"
import RegisterPage from "../../pages/RegisterPage"
import LoginPage from "../../pages/LoginPage"
import EditProfile from "../../pages/EditProfile"
import Profile from "../../pages/Profile"
import CreateClass from "../../pages/CreateClass"
import ClassHomePage from "../../pages/ClassHomePage"
import { createBrowserRouter } from "react-router-dom"

const useAppRoutes = () => {
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
  return { router }
}

export default useAppRoutes
