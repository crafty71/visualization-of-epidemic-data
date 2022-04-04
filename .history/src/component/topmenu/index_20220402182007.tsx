import { memo, SetStateAction } from "react";
import { Menu } from "antd";
import { useState } from "react";

import { NavLink } from "react-router-dom";

import { TopMuneWrapper } from "./indexStyls";

const index = memo(() => {
  const [current, setCurrent] = useState("domestic");
  const handClick = (e: { key: SetStateAction<string> }) => {
    setCurrent(e.key);
  };
  return (
    <TopMuneWrapper>
      <Menu mode="horizontal" selectedKeys={[current]} className="Mune">
        <Menu.Item
          key="domestic"
          className="MuneItem"
          // onClick={(e) => handClick(e)}
        >
          <NavLink to="/home">国内疫情</NavLink>
        </Menu.Item>
        <Menu.Item
          key="abroad"
          className="MuneItem"
          // onClick={(e) => handClick(e)}
        >
          <NavLink to="/about"> 国外疫情</NavLink>
        </Menu.Item>
      </Menu>
    </TopMuneWrapper>
  );
});

export default index;
