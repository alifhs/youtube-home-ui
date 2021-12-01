import React, { useState } from "react";
import "./header.scss";
import { YoutubeFilled } from "@ant-design/icons";
import { Drawer } from "antd";
import { Input, Space } from "antd";

const { Search } = Input;

const Header = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className="nav">
      <div className="wrapper">
        <div className="left">
          <button className="burger-menu-btn" onClick={showDrawer}>
            <img src="/align-justify-solid.svg" alt="" width="24" height="24" />
          </button>
          <Drawer
            title="Basic Drawer"
            placement="left"
            onClose={onClose}
            visible={visible}
            width={240}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>

          <YoutubeFilled style={{ fontSize: "36px", color: "red" }} />
        </div>
        <div className="middle">
          <Search
            placeholder="Search"
            allowClear
            // onSearch={onSearch}
            size="large"
            style={{ width: 572 }}
          />

          <div className="mic-container">
              <img src="/microphone-solid.svg" alt="mic" width="13"/>
          </div>
        </div>
        <div className="right">
                
                <img src="/video-solid.svg" alt="" width="22" />
                <img src="/th-solid.svg" alt="" width="24" />
                <img src="/bell-regular.svg" alt="" width="19" />
                <img src="/user-circle-solid.svg" alt="" width="30" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
