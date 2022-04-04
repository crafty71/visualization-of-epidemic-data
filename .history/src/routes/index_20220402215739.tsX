import { Navigate } from "react-router-dom";

import Demoestic from "@/view/Domestic/index";

const routes = [
  // UserLayout
  {
    path: "/*",
    element: <Demoestic />,
    children: [
      { path: "", element: <Navigate to="login" /> }, // Redirect
      {
        path: "login",
        element: <Login />,
      },
      route404,
    ],
  },
];
