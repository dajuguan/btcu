import React, { Component } from "react";
import { Link } from "react-router";
import MenuContainer from "../containers/MenuContainer";
// import UserBoxContainer from "../containers/UserBoxContainer";
import SearchBoxContainer from "../containers/SearchBoxContainer";
import { Menu } from "antd";
class Header extends Component {
  handleClick(e) {
    console.log(global.state);
    global.state = {
      menuName: e.key
    };
  }
  render() {
    return (
      <header className="b-header">
        <div className="b-container">
          <div className="b-header__wrap">
            <div className="b-header__left">
              <div className="b-header__item">
                <MenuContainer />
              </div>
              <div className="b-header__item">
                {
                  //<SearchBoxContainer />
                }
              </div>
            </div>
            <div className="b-header__middle">
              <Link className="b-logo" to="/">
                BTCU Crypto导航
              </Link>
            </div>
            <div className="b-header__right">
              <div className="b-header__item"></div>
            </div>
          </div>
        </div>
        <div>
          <Menu
            defaultSelectedKeys={["news"]}
            onClick={this.handleClick}
            theme="dark"
            mode="horizontal"
            style={{ paddingLeft: 20 }}
          >
            <Menu.Item key="news">资讯</Menu.Item>
            <Menu.Item key="defi">Defi</Menu.Item>
            <Menu.Item key="dapp">Dapp</Menu.Item>
            <Menu.Item key="exchange">交易所</Menu.Item>
            <Menu.Item key="database">交易数据库</Menu.Item>
            <Menu.Item key="resource">学习资料</Menu.Item>
            <Menu.Item key="paper">论文</Menu.Item>
          </Menu>
        </div>
      </header>
    );
  }
}

export default Header;
