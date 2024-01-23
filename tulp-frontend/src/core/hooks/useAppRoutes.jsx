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
import AssignmentForm from "../../components/ClassHome/Assignments/AssignmentForm"
import Chat from "../../components/Chat"
import ChatChannelMain from "../../components/Chat/ChatChannelMain"
import ChatDmMain from "../../components/Chat/ChatDmMain"
import VideoClass from "../../pages/VideoClass"
import ClassSocket from "../../components/ClassSocket"

// Loaders
import { manageInstructorsLoader } from "../../components/ClassEditPage/ManageInstructors/manageInstructorsLoader"
import { classEditLoader } from "../../components/ClassEditPage/ClassEdit/classEditLoader"
import { classLoader } from "../../pages/ClassHomePage/classLoader"
import { classProfileLoader } from "../../components/ClassHome/ClassProfile/classProfileLoader"
import { manageRequestsLoader } from "../../components/ClassEditPage/ManageRequests/manageRequestsLoader"
import { manageStudentsLoader } from "../../components/ClassEditPage/ManageStudents/ManageStudentsLoader"
import { streamLoader } from "../../components/ClassHome/ClassStream/Stream/streamLoader"
import { assignmentLoader } from "../../components/ClassHome/Assignments/assignmentLoader"
import { assignmentViewLoader } from "../../components/ClassHome/Assignments/AssignmentView/AssignmentViewLoader"
import { scheduleLoader } from "../../components/ClassHome/Schedule/secheduleLoader"
import { chatLoader } from "../../components/Chat/chatLoader"
import { chatChannelMainLoader } from "../../components/Chat/ChatChannelMain/ChatChannelMainLoader"
import { chatDMMainLoader } from "../../components/Chat/ChatDmMain/ChatDMMainLoader"
import { profileLoader } from "../../pages/Profile/profileLoader"

const useAppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' errorElement={<PageNotFound />}>
        <Route element={<RootLayout />}>
          <Route index element={<LandingPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route
            path='profile/:username?'
            element={<Profile />}
            loader={profileLoader}
          />
          <Route path='edit-profile' element={<EditProfile />} />
          <Route path='create-class' element={<CreateClass />} />
          <Route
            path='class-profile/:slug'
            element={<ClassProfile />}
            loader={classProfileLoader}
          />
        </Route>
        <Route path='class/:slug' element={<ClassSocket />}>
          <Route element={<NavLayout />}>
            <Route element={<FooterLayout />}>
              <Route element={<ClassHomePage />} loader={classLoader}>
                <Route path='stream' element={<Stream />} loader={streamLoader}>
                  <Route element={<ModalForm />}>
                    <Route path='add' element={<StreamForm />} />
                  </Route>
                </Route>
                <Route
                  path='schedule'
                  element={<Schedule />}
                  loader={scheduleLoader}>
                  <Route element={<ModalForm />}>
                    <Route path='add' element={<ScheduleForm />} />
                  </Route>
                </Route>
                <Route path='assignments'>
                  <Route
                    path=''
                    element={<Assignments />}
                    loader={assignmentLoader}>
                    <Route element={<ModalForm />}>
                      <Route path='add' element={<AssignmentForm />} />
                    </Route>
                  </Route>

                  <Route
                    path=':titleSlug'
                    element={<AssignmentView />}
                    loader={assignmentViewLoader}
                  />
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
            <Route path='chat' element={<Chat />} loader={chatLoader}>
              <Route
                path='channel/:channelslug'
                element={<ChatChannelMain />}
                loader={chatChannelMainLoader}
              />
              <Route
                path='dm/:username'
                element={<ChatDmMain />}
                loader={chatDMMainLoader}
              />
            </Route>
          </Route>
          <Route path='room' element={<VideoClass />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Route>
    )
  )
  return { router }
}

export default useAppRoutes
