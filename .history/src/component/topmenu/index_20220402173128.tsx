import { Menu } from "antd";
import { PureComponent } from "react";

import { TopMuneWrapper } from "./indexStyls";

class index extends PureComponent {
  state = {
    current: "/home",
  };

  handleClick = (e: { key: any }) => {
    console.log("click ", e);
    this.setState({ current: e.key });
    this.props.history;
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
          <Menu.Item key="/home" className="MuneItem">
            国内疫情
          </Menu.Item>
          <Menu.Item key="/about" className="MuneItem">
            国外疫情
          </Menu.Item>
        </Menu>
      </TopMuneWrapper>
    );
  }
}

export default index;
