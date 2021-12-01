import React from "react";
import "./leftbar.scss";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="wrapper">
        <button className="leftbar-menu-btn">
          <img src="/home-solid.svg" alt="" width="24" height="24" />
        </button>
        <button className="leftbar-menu-btn">
          <img src="/compass-solid.svg" alt="icon" width="24" height="24" />
        </button>
        <button className="leftbar-menu-btn">
          <img src="/play-solid.svg" alt="" width="24" height="24" />
        </button>
        <button className="leftbar-menu-btn">
          <img src="/play-solid.svg" alt="" width="24" height="24" />
        </button>
      </div>
    </div>
  );
};

export default LeftBar;
