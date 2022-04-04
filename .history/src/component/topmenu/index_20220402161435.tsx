import { memo } from "react";
import { Menu } from "antd";

const index = memo(() => {
  return <Menu selectedKeys={[current]} mode="horizontal"></Menu>;
});

export default index;
