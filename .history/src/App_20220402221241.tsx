import { memo, Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";

import TopMune from "@/component/topmenu/index";
import routes from "./routes";

const element = function RenderRoutes() {
  const element = useRoutes(routes);
  return element;
};
const App = memo(() => {
  return (
    <BrowserRouter>
      <TopMune />
      <Suspense fallback={<div>page loading</div>}>{element}</Suspense>
    </BrowserRouter>
  );
});

export default App;
