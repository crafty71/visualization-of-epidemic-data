import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React from "react";

const { SubMenu } = Menu;

class Topmune extends React.Component {
  state = {
    current: "1",
  };

  handleClick = (e: { key: any }) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="1">Navigation One</Menu.Item>
        <Menu.Item key="2">Navigation One</Menu.Item>
        <Menu.Item key="3">Navigation One</Menu.Item>
      </Menu>
    );
  }
}

export default Topmune;
