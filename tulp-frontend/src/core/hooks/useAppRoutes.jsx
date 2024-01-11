import BasicLayout from "../../components/UI/BasicLayout"
import LandingPage from "../../pages/LandingPage"
import PageNotFound from "../../pages/PageNotFound"
import RegisterPage from "../../pages/RegisterPage"
import LoginPage from "../../pages/LoginPage"
import EditProfile from "../../pages/EditProfile"
import Profile from "../../pages/Profile"
import CreateClass from "../../pages/CreateClass"
import ClassHomePage from "../../pages/ClassHomePage"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"

const useAppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route element={<BasicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='profile/:id?' element={<Profile />} />
          <Route path='edit-profile' element={<EditProfile />} />
          <Route path='create-class' element={<CreateClass />} />
        </Route>
        <Route path='class/' element={<BasicLayout />}>
          <Route path=':slug' element={<ClassHomePage />} />
        </Route>
      </Route>
    )
  )
  return { router }
}

export default useAppRoutes
