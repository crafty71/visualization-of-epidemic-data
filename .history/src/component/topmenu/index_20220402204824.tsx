import { memo, SetStateAction } from "react";
import { Menu } from "antd";
import { useState } from "react";

import { NavLink, useHistory } from "react-router-dom";

import { TopMuneWrapper } from "./indexStyls";
import { useEffect } from "react";

const history = useHistory();

const pathname = history.location;

const index = memo(() => {
  const [current, setCurrent] = useState("/home");
  const handClick = (e: { key: SetStateAction<string> }) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    console.log(useHistory);
  });
  return (
    <TopMuneWrapper>
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        className="Mune"
        onClick={(e) => handClick(e)}
      >
        <Menu.Item key="/home" className="MuneItem">
          <NavLink to="/home">国内疫情</NavLink>
        </Menu.Item>
        <Menu.Item key="/about" className="MuneItem">
          <NavLink to="/about"> 国外疫情</NavLink>
        </Menu.Item>
      </Menu>
    </TopMuneWrapper>
  );
});

export default index;
