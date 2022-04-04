import { memo, SetStateAction } from "react";
import { Menu } from "antd";
import { useState } from "react";

import { TopMuneWrapper } from "./indexStyls";

const index = memo(() => {
  const [current, setCurrent] = useState("abroad");

  const handClick = (e: { key: SetStateAction<string> }) => {
    console.log(e.key);
    setCurrent(e.key);
  };
  return (
    <TopMuneWrapper>
      <Menu mode="horizontal" selectedKeys={[current]} className="Mune">
        <Menu.Item
          key="domestic"
          className="MuneItem"
          onClick={() => handClick}
        >
          Navigation One
        </Menu.Item>
        <Menu.Item key="abroad" className="MuneItem" onClick={() => handClick}>
          Navigation One
        </Menu.Item>
      </Menu>
    </TopMuneWrapper>
  );
});

export default index;
