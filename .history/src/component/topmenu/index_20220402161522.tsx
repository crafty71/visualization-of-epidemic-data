import { memo } from "react";
import { Menu } from "antd";

const index = memo(() => {
  return (
    <Menu selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail">Navigation One</Menu.Item>
    </Menu>
  );
});

export default index;
