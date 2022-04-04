import { memo } from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";

import TopMune from "@/component/topmenu/index";

const App = memo(() => {
  return (
    <BrowserRouter>
      <TopMune />
      {renderRoutes(routes)}
    </BrowserRouter>
  );
});

export default App;
