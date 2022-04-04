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
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        className="Mune"
        onClick={() => handClick}
      >
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
