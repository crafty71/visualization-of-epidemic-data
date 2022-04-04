import { memo, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";

import TopMune from "@/component/topmenu/index";

const App = memo(() => {
  return (
    <BrowserRouter>
      <TopMune />
      <Suspense fallback={<div>page loading</div>}>
        {renderRoutes(routes)}
        123
      </Suspense>
    </BrowserRouter>
  );
});

export default App;
