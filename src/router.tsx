import { createBrowserRouter, Navigate } from 'react-router-dom';
import SelectPage from './selectBuket/selectPage';
import Main from './pages/Main';
import Landing from './pages/Landing';
import Todolist from './pages/Todolist';
import App from './App';

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
    path: '/',
    element: <App />,
    children: [
      {
        path: 'todolist',
        element: <Todolist />,
      },
    ],
  },
]);

export default router;
