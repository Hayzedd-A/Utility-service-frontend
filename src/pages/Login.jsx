import React, { useEffect } from "react";
import LoginComp from "../components/login/LoginComp";
import "../styles/login.css";
import SignupComp from "../components/login/SignupComp";
import Image from "../components/login/Image";
import UtilModal from "../components/Global/UtilModal";
import axios from "axios";

function Login() {
  useEffect(() => {
    // check for token in the localstorage, if exist then validate it from the server then redirect to the dashboard page
    // else show the login page
    try {
      const token = localStorage.getItem("token");
      if (token) {
        // validate token
        axios
          .post("/api/validate-token", { token })
          .then(() => {
            // redirect to dashboard page
            window.location.href = "/dashboard";
          })
          .catch(() => {
            // token is invalid, remove it from localstorage and show login page
            localStorage.removeItem("token");
          });
      } else {
        // show login page
      }
    } catch (error) {
      console.error(error.message);
      // show login page
    }
  });

  return (
    <div className="login-page">
      <div className="form-container">
        <LoginComp />
        <SignupComp />
      </div>
      <Image />
    </div>
  );
}

export default Login;
