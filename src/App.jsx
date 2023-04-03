import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import ErrorPage from "./page/error/error-page";
import Dashboard from "./page/Dashboard";
import { getData } from "./lib/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
        loader: getData,
      },
    ],
  },
]);
export default router;
