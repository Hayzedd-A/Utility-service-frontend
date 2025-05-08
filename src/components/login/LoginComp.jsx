import React, { useContext } from "react";
import LoginForm from "./LoginForm";
import Header from "./Header";
import { AppContext } from "../../config/AppContext";

function LoginComp({ setUtilContent }) {
  const { loginForm } = useContext(AppContext);
  return (
    <div className={`login-component ${loginForm === "login" ? "active" : ""}`}>
      <Header content={"Let's sign you in"} />
      <LoginForm setUtilContent={setUtilContent} />
    </div>
  );
}

export default LoginComp;
