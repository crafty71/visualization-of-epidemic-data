import React, { memo, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { Provider } from "react-redux";

const App = memo(() => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>page loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
    </BrowserRouter>
  );
});

export default App;
