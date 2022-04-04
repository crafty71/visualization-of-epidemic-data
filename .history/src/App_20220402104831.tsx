import { memo, useEffect } from "react";
import request from "./service/index";

const App = memo(() => {
  const login = request.get({
    url: "/home/data?type=sell&page=1",
  });

  useEffect(() => {
    login().then();
  });
  return <div>App</div>;
});

export default App;
