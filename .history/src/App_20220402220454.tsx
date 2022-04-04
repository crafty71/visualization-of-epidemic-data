import { memo, Suspense } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

import TopMune from "@/component/topmenu/index";
import routes from "./routes";

const App = memo(() => {
  const element = useRoutes(routes);
  return (
    <useNavigate>
      <TopMune />
      <Suspense fallback={<div>page loading</div>}>{element}</Suspense>
    </useNavigate>
  );
});

export default App;
