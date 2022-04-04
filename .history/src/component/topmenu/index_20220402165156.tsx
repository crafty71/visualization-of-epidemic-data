import { memo } from "react";
import { Menu } from "antd";
import { useState } from "react";

import { TopMuneWrapper } from "./indexStyls";

const index = memo(() => {
  const [current, setCurrent] = useState("domestic");
  return (
    <TopMuneWrapper>
      <Menu mode="horizontal" selectedKeys={[current]} className="Mune">
        <Menu.Item key="domestic" style={{ width: "50%" }}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="abroad">Navigation One</Menu.Item>
      </Menu>
    </TopMuneWrapper>
  );
});

export default index;
