import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import App from './App';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ForgotPassword from './pages/ForgotPassword';
import ConfirmEmail from './pages/confirmEmail.jsx';
import NoEmail from './pages/noEmail';
import SendMessage from './pages/SendMessage';

import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/app', element: <App /> },
  { path: '/registration', element: <Registration /> },
  { path: '/forgotPassword', element: <ForgotPassword /> },
  { path: '/confirmEmail', element: <ConfirmEmail /> },
  { path: '/noEmail', element: <NoEmail /> },
  { path: '/sendMessage', element: <SendMessage /> },
], {
  basename: '/LiveDuneTestTask'
});

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);