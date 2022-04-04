import { memo, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import TopMune from "@/component/topmenu/index";
import routes from "./routes";

const App = memo(() => {
  const element = RenderRoutes();
  return (
    <BrowserRouter>
      <TopMune />
      <Suspense fallback={<div>page loading</div>}>{element}</Suspense>
    </BrowserRouter>
  );
});

export default App;
