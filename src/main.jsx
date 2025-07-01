import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import './index.css'
import Registration from './pages/Registration'
import ForgotPassword from './pages/ForgotPassword'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/app',
    element: <App />,
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '/forgotPassword',
    element: <ForgotPassword />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)