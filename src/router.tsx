import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import SelectPage from './selectBuket/selectPage';
import Main from './pages/Main';
import Landing from './pages/Landing';

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
]);

export default router;
