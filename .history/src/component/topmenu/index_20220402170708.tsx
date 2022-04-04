import { memo, SetStateAction } from "react";
import { Menu } from "antd";
import { useState } from "react";

import { TopMuneWrapper } from "./indexStyls";

const index = memo(() => {
  const [current, setCurrent] = useState("domestic");
  const handClick = (e: { key: SetStateAction<string> }) => {
    setCurrent(e.key);
  };
  return (
    <TopMuneWrapper onClick={(e) => handClick}>
      <Menu mode="horizontal" selectedKeys={[current]} className="Mune">
        <Menu.Item key="domestic" className="MuneItem">
          Navigation One
        </Menu.Item>
        <Menu.Item key="abroad" className="MuneItem">
          Navigation One
        </Menu.Item>
      </Menu>
    </TopMuneWrapper>
  );
});

export default index;
