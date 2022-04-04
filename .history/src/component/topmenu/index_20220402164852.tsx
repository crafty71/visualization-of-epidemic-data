import { memo } from "react";
import { Menu } from "antd";
import { useState } from "react";

const index = memo(() => {
  const [current, setCurrent] = useState("domestic");
  return (
    <Menu mode="horizontal" selectedKeys={[current]} className="Mune">
      <Menu.Item key="domestic">
        Navigation
        One111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
      </Menu.Item>
      <Menu.Item key="abroad">Navigation One</Menu.Item>
    </Menu>
  );
});

export default index;
