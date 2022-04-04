import { memo, Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Provider } from "react-redux";

import TopMune from "@/component/topmenu/index";
import routes from "./routes";

import store from "./store/index";

const Element = function RenderRoutes() {
  const Element = useRoutes(routes);
  return Element;
};
const App = memo(() => {
  return (
    <BrowserRouter>
      <TopMune />
      <Suspense fallback={<div>page loading</div>}>
        <Element />
      </Suspense>
    </BrowserRouter>
  );
});

export default App;
