import React from "react";
import { Redirect } from "react-router-dom";

const LVhome = React.lazy(() => import("@/view/Domestic/index"));
const LVabout = React.lazy(() => import("@/view/Abroad/index"));

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
