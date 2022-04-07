import { Navigate } from "react-router-dom";

import Demoestic from "@/view/Domestic/index";
import Abroad from "@/view/Abroad/index";
import EpidemicProvience from "@/view/Provience/EpidemicProvience";

const routes = [
  // UserLayout

  { path: "/", element: <Navigate to="home" /> }, // Redirect
  {
    path: "/home",
    element: <Demoestic />,
    // children: [
    //   // { index: true, element: <GoodsList /> },
    //   { path: "/provience", element: <EpidemicProvience /> },
    // ],
  },
  {
    path: "/abroad",
    element: <Abroad />,
  },
  {
    path: "/home/provience?",
    element: <EpidemicProvience />,
  },
];

export default routes;
