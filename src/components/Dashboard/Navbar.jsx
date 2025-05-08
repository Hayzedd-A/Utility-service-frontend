import React from "react";
import {
  MenuUnfoldOutlined,
  BellOutlined,
  MailOutlined,
} from "@ant-design/icons";
import ProfilePic from "./ProfilePic";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftBar">
        {/* menu icon */}
        <MenuUnfoldOutlined />
        {/* User name */}
        <h1>Hi, Adebayo</h1>
      </div>
      <div className="rightBar">
        {/* notifiacation bell */}
        <BellOutlined />
        {/* message icon */}
        <MailOutlined />
        {/* user profile pic */}
        <ProfilePic />
      </div>
    </div>
  );
}

export default Navbar;
