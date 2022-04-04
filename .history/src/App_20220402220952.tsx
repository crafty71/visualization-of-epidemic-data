import { memo, Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";

import TopMune from "@/component/topmenu/index";
import element from "./routes";

const App = memo(() => {
  return (
    <BrowserRouter>
      <TopMune />
      <Suspense fallback={<div>page loading</div>}>{element}</Suspense>
    </BrowserRouter>
  );
});

export default App;
