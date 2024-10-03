import React, { useContext } from "react";
import Header from "./Header";
import SignupForm from "./SignupForm";

function SignupComp() {
  return (
    <div className="signup-component">
      <Header content={"Let's create your account"} />
      <SignupForm />
    </div>
  );
}

export default SignupComp;
