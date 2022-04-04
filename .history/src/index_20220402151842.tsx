import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const element = document.getElementById("root")!;

const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>page loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <TaBbar TaBbarConfig={TaBbarConfig} />
    </BrowserRouter>
  </React.StrictMode>
);
