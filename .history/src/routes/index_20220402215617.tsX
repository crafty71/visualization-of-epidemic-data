import { Navigate } from "react-router-dom";

const routes = [
  // UserLayout
  {
    path: "user/*",
    element: <UserLayout />,
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
