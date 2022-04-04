import { Menu } from "antd";
import React, { PureComponent } from "react";

import { TopMuneWrapper } from "./indexStyls";

class index extends PureComponent {
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
      <TopMuneWrapper>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          className="Mune"
        >
          <Menu.Item key="1" className="Mune">
            Navigation One
          </Menu.Item>
          <Menu.Item key="2">Navigation One</Menu.Item>
        </Menu>
      </TopMuneWrapper>
    );
  }
}

export default index;
