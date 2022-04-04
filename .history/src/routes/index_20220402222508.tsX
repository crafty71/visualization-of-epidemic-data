import { Navigate, useRoutes } from "react-router-dom";

import Demoestic from "@/view/Domestic/index";
import Abroad from "@/view/Abroad/index";

const routes = [
  // UserLayout

  { path: "/", element: <Navigate to="home" /> }, // Redirect
  {
    path: "/home",
    element: <Demoestic />,
  },
  {
    path: "/abroad",
    element: <Abroad />,
  },
];

export default routes;
