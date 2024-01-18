// React Router
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"

// Layouts
import RootLayout from "../../components/UI/RootLayout"
import NavLayout from "../../components/UI/NavLayout"
import FooterLayout from "../../components/UI/FooterLayout"

// Auth Pages
import RegisterPage from "../../pages/RegisterPage"
import LoginPage from "../../pages/LoginPage"

// Pages
import LandingPage from "../../pages/LandingPage"
import PageNotFound from "../../pages/PageNotFound"
import Profile from "../../pages/Profile"
import EditProfile from "../../pages/EditProfile"
import CreateClass from "../../pages/CreateClass"
import ClassHomePage from "../../pages/ClassHomePage"
import Stream from "../../components/ClassHome/ClassStream/Stream"
import Assignments from "../../components/ClassHome/Assignments"
import AssignmentView from "../../components/ClassHome/Assignments/AssignmentView"
import Schedule from "../../components/ClassHome/Schedule"
import ModalForm from "../../components/UI/ModalForm"
import ScheduleForm from "../../components/ClassHome/Schedule/ScheduleForm"
import ClassEditPage from "../../pages/ClassEditPage"
import ClassEdit from "../../components/ClassEditPage/ClassEdit"
import ManageInstructors from "../../components/ClassEditPage/ManageInstructors"
import ManageStudents from "../../components/ClassEditPage/ManageStudents"
import ManageRequests from "../../components/ClassEditPage/ManageRequests"
import AddInstructorForm from "../../components/ClassEditPage/ManageInstructors/AddInstructorForm"
import ClassProfile from "../../components/ClassHome/ClassProfile"
import StreamForm from "../../components/ClassHome/ClassStream/StreamForm"

// Loaders
import { manageInstructorsLoader } from "../../components/ClassEditPage/ManageInstructors/manageInstructorsLoader"
import { classEditLoader } from "../../components/ClassEditPage/ClassEdit/classEditLoader"
import { classLoader } from "../../pages/ClassHomePage/classLoader"
import { classProfileLoader } from "../../components/ClassHome/ClassProfile/classProfileLoader"
import { manageRequestsLoader } from "../../components/ClassEditPage/ManageRequests/manageRequestsLoader"
import { manageStudentsLoader } from "../../components/ClassEditPage/ManageStudents/ManageStudentsLoader"
import { streamLoader } from "../../components/ClassHome/ClassStream/Stream/streamLoader"

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
          <Route
            path='class-profile/:slug'
            element={<ClassProfile />}
            loader={classProfileLoader}
          />
        </Route>
        <Route path='class/:slug'>
          <Route element={<NavLayout />}>
            <Route element={<FooterLayout />}>
              <Route element={<ClassHomePage />} loader={classLoader}>
                <Route path='stream' element={<Stream />} loader={streamLoader}>
                  <Route element={<ModalForm />}>
                    <Route path='add' element={<StreamForm />} />
                  </Route>
                </Route>
                <Route path='schedule' element={<Schedule />}>
                  <Route element={<ModalForm />}>
                    <Route path='add' element={<ScheduleForm />} />
                  </Route>
                </Route>
                <Route path='assignments'>
                  <Route index element={<Assignments />} />
                  <Route path=':titleSlug' element={<AssignmentView />} />
                </Route>
              </Route>
              <Route path='settings' element={<ClassEditPage />}>
                <Route
                  path='edit'
                  element={<ClassEdit />}
                  loader={classEditLoader}
                />
                <Route
                  path='instructors'
                  element={<ManageInstructors />}
                  loader={manageInstructorsLoader}>
                  <Route path='add' element={<ModalForm />}>
                    <Route index element={<AddInstructorForm />} />
                  </Route>
                </Route>
                <Route
                  path='students'
                  element={<ManageStudents />}
                  loader={manageStudentsLoader}
                />
                <Route
                  path='requests'
                  element={<ManageRequests />}
                  loader={manageRequestsLoader}
                />
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
