import React from "react";
import LoginForm from "./LoginForm";
import Header from "./Header";

function LoginComp() {
  return (
    <div className="login-component">
      <Header content={"Let's sign you in"} />
      <LoginForm />
    </div>
  );
}

export default LoginComp;
