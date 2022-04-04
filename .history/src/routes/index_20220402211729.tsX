import React from "react";
import { Redirect } from "react-router-dom";

const Domestic = React.lazy(() => import("@/view/Domestic/index"));
const Abroad = React.lazy(() => import("@/view/Abroad/index"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    component: Domestic,
  },
  {
    path: "/about",
    component: Abroad,
  },
];

export default routes;
