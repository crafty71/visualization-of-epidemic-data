import { memo, Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";

import TopMune from "@/component/topmenu/index";
import routes from "./routes";

const App = memo(() => {
  const element = useRoutes(routes);
  return (
    <BrowserRouter>
      <TopMune />
      <Suspense fallback={<div>page loading</div>}></Suspense>
    </BrowserRouter>
  );
});

export default App;
