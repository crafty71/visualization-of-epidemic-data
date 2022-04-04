import { memo, useEffect } from "react";
import request from "./service/index";

const App = memo(() => {
  const login = request;

  useEffect(() => {});
  return <div>App</div>;
});

export default App;
