import React from "react";
import LoginForm from "./LoginForm";
import Header from "./Header";

function LoginComp({ setUtilContent }) {
  return (
    <div className="login-component">
      <Header content={"Let's sign you in"} />
      <LoginForm setUtilContent={setUtilContent} />
    </div>
  );
}

export default LoginComp;
