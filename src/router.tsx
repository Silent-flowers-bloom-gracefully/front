import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SelectPage from "./selectBuket/selectPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/select",
    element: <SelectPage />,
  },
]);

export default router;
