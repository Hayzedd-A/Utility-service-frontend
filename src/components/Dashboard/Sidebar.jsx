import React from "react";
import profile from "../../assets/profile.svg";
import transaction from "../../assets/transaction.svg";
import aboutUs from "../../assets/about-us.svg";
import settings from "../../assets/settings.svg";
import referFriend from "../../assets/refer-friend.svg";
import contectUs from "../../assets/contact-us.svg";
import logout from "../../assets/logout.svg";
import notification from "../../assets/notifications.svg";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigation = useNavigate();
  const handleLogout = () => {
    // Add your logout logic here
    localStorage.removeItem("accessToken");
    // Redirect to login page
    navigation("/login");
  };
  return (
    <div className="sidebar">
      <h1>Hi, Adebayo</h1>
      <div className="links">
        <ul>
          <li>
            <img src={profile} alt="" />
            <button>Profile</button>
          </li>
          <li>
            <img src={notification} alt="" />
            <button>Notifications</button>
          </li>
          <li>
            <img src={transaction} alt="" />
            <button>Transactions</button>
          </li>
          <li>
            <img src={settings} alt="" />
            <button>Settings</button>
          </li>
          <li>
            <img src={referFriend} alt="" />
            <button>Refer Friend</button>
          </li>
          <li>
            <img src={contectUs} alt="" />
            <button>Contact Us</button>
          </li>
          <li>
            <img src={aboutUs} alt="" />
            <button>About Us</button>
          </li>
          <li>
            <img src={logout} alt="" />
            <button onClick={handleLogout} href="#">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
