import React from "react";
import { Redirect } from "react-router-dom";

const LVhome = React.lazy(() => import("@/view/home/index"));
const LVabout = React.lazy(() => import("@/view/about/index"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    exact: true,
    component: LVhome,
  },
  {
    path: "/about",
    exact: true,
    component: LVabout,
  },
];

export default routes;
