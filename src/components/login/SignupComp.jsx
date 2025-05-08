import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import SignupForm from "./SignupForm";
import { AppContext } from "../../config/AppContext";

// This component is hidden until the user clicks on the signup button in the login component.

function SignupComp({ setUtilContent }) {
  // Get the current state of the login form from the AppContext
  const { loginForm } = useContext(AppContext);
  const [visibility, setVisibility] = useState("hidden");

  // If the login form is set to "signup", make the signup component visible

  useEffect(() => {
    console.log(loginForm);
    if (loginForm === "signup") {
      setVisibility("visible");
    }
  }, [loginForm]);

  return (
    <div
      className={`signup-component ${loginForm === "signup" ? "active" : ""}`}
      style={{
        visibility: visibility,
      }}
    >
      <Header content={"Let's create your account"} />
      <SignupForm setUtilContent={setUtilContent} />
    </div>
  );
}

export default SignupComp;
