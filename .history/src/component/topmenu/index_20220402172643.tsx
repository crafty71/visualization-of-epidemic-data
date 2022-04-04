import { Menu } from "antd";
import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink to={"/home"}>
            <Menu.Item key="1" className="MuneItem">
              国内疫情
            </Menu.Item>
          </NavLink>
          <Menu.Item key="2" className="MuneItem">
            国外疫情
          </Menu.Item>
        </Menu>
      </TopMuneWrapper>
    );
  }
}

export default index;
