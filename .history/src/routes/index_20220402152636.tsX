import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const LVhome = require("@/view/home/index.tsx");
console.log(LVhome);
const LVabout = require("@/view/about/index.tsx");

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
