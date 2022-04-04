import { Navigate, useRoutes } from "react-router-dom";

import Demoestic from "@/view/Domestic/index";
import Abroad from "@/view/Abroad/index";

const routes = [
  // UserLayout
  {
    path: "/*",
    element: <Demoestic />,
    children: [
      { path: "", element: <Navigate to="login" /> }, // Redirect
      {
        path: "/home",
        element: <Demoestic />,
      },
      {
        path: "/about",
        element: <Abroad />,
      },
    ],
  },
];

export default routes;
