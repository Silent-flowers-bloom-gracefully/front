import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import SelectPage from './selectBuket/selectPage';
import Main from './pages/Main';
import Landing from './pages/Landing';
import SelectBuket from './pages/SelectBuket';
import Login from './pages/Login';
import LoginFlow from './pages/LoginFlow';
import Signup from './pages/Signup';
import SignupFlow from './pages/SignupFlow';
import Community from './pages/Community';
import WritePage from './pages/Write';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/landing" replace />,
  },
  {
    path: '/landing',
    element: <Landing />,
  },
  {
    path: '/select',
    element: <SelectPage />,
  },
  {
    path: '/main',
    element: <Main />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/loginflow',
    element: <LoginFlow />
  },
  {
    path: '/signupflow',
    element: <SignupFlow />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/selectbuket',
    element: <SelectBuket />
  },
  {
    path: '/community',
    element: <Community />
  },
]);

export default router;
