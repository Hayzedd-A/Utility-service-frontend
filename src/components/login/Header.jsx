import React, { useContext } from "react";
import Logo from "../Global/Logo";

function Header({ content }) {
  return (
    <div className="header">
      <Logo />
      <h2>Get started</h2>
      <h3>Welcome to PayBill - {content}</h3>
      <hr />
    </div>
  );
}

export default Header;
