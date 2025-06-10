import { createBrowserRouter, Navigate } from 'react-router-dom';
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
import Todolist from './pages/Todolist';
import App from './App';
import Progress from './pages/Progress';

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
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'todolist',
        element: <Todolist />,
      },
      {
        path: 'progress',
        element: <Progress />,
      },
    ],
  },
]);

export default router;
