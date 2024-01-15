import RootLayout from "../../components/UI/RootLayout"
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
import NavLayout from "../../components/UI/NavLayout"
import FooterLayout from "../../components/UI/FooterLayout"
import Stream from "../../components/ClassHome/Stream"
import Assignments from "../../components/ClassHome/Assignments"
import AssignmentView from "../../components/ClassHome/AssignmentView"
import Schedule from "../../components/ClassHome/Schedule"
import ModalForm from "../../components/UI/ModalForm"

const useAppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route element={<RootLayout />}>
          <Route index element={<LandingPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='profile/:id?' element={<Profile />} />
          <Route path='edit-profile' element={<EditProfile />} />
          <Route path='create-class' element={<CreateClass />} />
        </Route>
        <Route path='class/:slug'>
          <Route element={<NavLayout />}>
            <Route element={<FooterLayout />}>
              <Route element={<ClassHomePage />}>
                <Route index element={<Stream />} />
                <Route path='schedule' element={<Schedule />}>
                  <Route path='add' element={<ModalForm />} />
                </Route>
                <Route path='assignments'>
                  <Route index element={<Assignments />} />
                  <Route path=':titleSlug' element={<AssignmentView />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )
  return { router }
}

export default useAppRoutes
