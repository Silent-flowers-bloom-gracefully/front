import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SelectPage from "./selectBuket/selectPage";
import Main from "./pages/Main";
import Landing from './pages/Landing';
import Community from './pages/Community';
import Write from './pages/Write';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/select",
    element: <SelectPage />,
  },
  {
    path: "/main",
    element: <Main />,

  }
  {
    path: '/community',
    element: <Community />,
  },
  {
    path:'/write',
    element: <Write/>,
  },
]);

export default router;
