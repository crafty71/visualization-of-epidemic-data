import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const LVhome = lazy(() => import("@/view/home/index"));
const LVabout = React.lazy(() => import("../view/about/index"));

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
