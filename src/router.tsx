import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SelectPage from "./selectBuket/selectPage";
import Main from "./pages/Main";
import Landing from './pages/Landing';
import Community from './pages/Community';
import Write from './pages/Write';
import Login from "./pages/Login";
import LoginFlow from "./pages/LoginFlow";


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

  }
]);

export default router;
