import React, { useEffect, useState } from "react";
import LoginComp from "../components/login/LoginComp";
import "../styles/login.css";
import SignupComp from "../components/login/SignupComp";
import Image from "../components/login/Image";
import UtilModal from "../components/Global/UtilModal";
import axios from "axios";

function Login() {
  const [utilContent, setUtilContent] = useState(null);
  useEffect(() => {
    // check for token in the localstorage, if exist then validate it from the server then redirect to the dashboard page
    // else show the login page
    try {
      const token = localStorage.getItem("accessToken");
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
    <div className="page-container">
      <div className="login-page">
        <UtilModal>
          {/* Add your modal content here */}
          {utilContent}
        </UtilModal>
        <div className="form-container">
          <LoginComp setUtilContent={setUtilContent} />
          <SignupComp setUtilContent={setUtilContent} />
        </div>
        <Image />
      </div>
    </div>
  );
}

export default Login;
