import React from "react";
import { Redirect } from "react-router-dom";

const LVhome = React.lazy(() => import("@/view/home/index.tsx"));
const LVabout = React.lazy(() => import("@/view/about/index.tsx"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    component: LVhome,
  },
  {
    path: "/about",
    component: LVabout,
  },
];

export default routes;
