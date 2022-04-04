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
        path: "login",
        element: <Abroad />,
      },
    ],
  },
];

const element = function RenderRoutes() {
  const element = useRoutes(routes);
  return element;
};

export default element;
