import { memo, useEffect } from "react";
import { accountLoginRequest } from "./service/login/index";

const App = memo(() => {
  useEffect(() => {
    accountLoginRequest().then((res) => {
      console.log(res.data);
    });
  });
  return <div>App</div>;
});

export default App;
