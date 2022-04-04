import { memo, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";

import TopMune from "@/component/topmenu/index";

const App = memo(() => {
  return (
    <div>
      <BrowserRouter>
        <TopMune />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
      </BrowserRouter>
    </div>
  );
});

export default App;
