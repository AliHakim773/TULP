import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./core/redux/store"
import { Toaster } from "react-hot-toast"

import "./styles/index.css"
import useAppRoutes from "./core/hooks/useAppRoutes.jsx"

const App = () => {
  const { router } = useAppRoutes()

  return (
    <div className='app'>
      <div>
        <Toaster />
      </div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  )
}

export default App
