import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SelectPage from "./selectBuket/selectPage";
import Main from "./pages/Main";

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
]);

export default router;
