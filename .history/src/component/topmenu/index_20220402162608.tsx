import { memo } from "react";
import { Menu } from "antd";
import { useState } from "react";

const index = memo(() => {
  const [current, setCurrent] = useState();
  return (
    <Menu mode="horizontal">
      <Menu.Item key="domestic">Navigation One</Menu.Item>
      <Menu.Item key="abroad">Navigation One</Menu.Item>
    </Menu>
  );
});

export default index;
