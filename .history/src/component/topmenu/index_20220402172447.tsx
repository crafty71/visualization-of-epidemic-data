import { Menu } from "antd";
import React, { PureComponent } from "react";

import { TopMuneWrapper } from "./indexStyls";

class index extends PureComponent {
  state = {
    current: "1",
  };

  handleClick = (e: { key: any }) => {
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
          <Menu.Item key="1" className="MuneItem">
            国内疫情
          </Menu.Item>
          <Menu.Item key="2" className="MuneItem">
            国外疫情
          </Menu.Item>
        </Menu>
      </TopMuneWrapper>
    );
  }
}

export default index;
