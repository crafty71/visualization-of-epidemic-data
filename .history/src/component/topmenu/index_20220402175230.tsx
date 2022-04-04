import { memo, SetStateAction } from "react";
import { Menu } from "antd";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { TopMuneWrapper } from "./indexStyls";

const index = memo((props) => {
  const [current, setCurrent] = useState("domestic");
  const history = useHistory();
  const handClick = (e: { key: SetStateAction<string> }) => {
    console.log(e.key);
    setCurrent(e.key);
    if (e.key === "domestic") {
      console.log(123);
      history.push("/home");
    } else {
      history.push("/about");
    }
  };
  return (
    <TopMuneWrapper>
      <Menu mode="horizontal" selectedKeys={[current]} className="Mune">
        <Menu.Item
          key="domestic"
          className="MuneItem"
          onClick={(e) => handClick(e)}
        >
          国内疫情
        </Menu.Item>
        <Menu.Item
          key="abroad"
          className="MuneItem"
          onClick={(e) => handClick(e)}
        >
          国外疫情
        </Menu.Item>
      </Menu>
    </TopMuneWrapper>
  );
});

export default index;
