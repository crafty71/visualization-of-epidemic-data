import { memo, useEffect } from "react";
import { accountLoginRequest } from "./service/login/index";

const App = memo(() => {
  useEffect(() => {
    accountLoginRequest().then((res) => {
      console.log(res);
    });
  });
  return <div>App</div>;
});

export default App;
