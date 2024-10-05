import React from "react";
import profile from "../../assets/profile.svg";
import transaction from "../../assets/transaction.svg";
import aboutUs from "../../assets/about-us.svg";
import settings from "../../assets/settings.svg";
import referFriend from "../../assets/refer-friend.svg";
import contectUs from "../../assets/contact-us.svg";
import logout from "../../assets/logout.svg";
import notification from "../../assets/notifications.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Hi, Adebayo</h1>
      <div className="links">
        <ul>
          <li>
            <img src={profile} alt="" />
            <a href="#">Profile</a>
          </li>
          <li>
            <img src={notification} alt="" />
            <a href="#">Notifications</a>
          </li>
          <li>
            <img src={transaction} alt="" />
            <a href="#">Transactions</a>
          </li>
          <li>
            <img src={settings} alt="" />
            <a href="#">Settings</a>
          </li>
          <li>
            <img src={referFriend} alt="" />
            <a href="#">Refer Friend</a>
          </li>
          <li>
            <img src={contectUs} alt="" />
            <a href="#">Contact Us</a>
          </li>
          <li>
            <img src={aboutUs} alt="" />
            <a href="#">About Us</a>
          </li>
          <li>
            <img src={logout} alt="" />
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
