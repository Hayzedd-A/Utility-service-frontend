import React, { useEffect, useState } from "react";
import LoginComp from "../components/login/LoginComp";
import "../styles/login.css";
import SignupComp from "../components/login/SignupComp";
import Image from "../components/login/Image";
import UtilModal from "../components/Global/UtilModal";
import axios from "axios";
import { verifyToken } from "../Controllers/Signup.controller";
import { useNavigate } from "react-router-dom";

function Login() {
  const [utilContent, setUtilContent] = useState(null);
  const [notLoggedIn, setNotLoggedIn] = useState(false);
  const navigation = useNavigate();
  useEffect(() => {
    (async () => {
      // check for token in the localstorage. if exist,
      // then validate it from the server then redirect to the dashboard page
      // else show the login page
      try {
        const token = localStorage.getItem("accessToken");
        if (token) {
          // validate token
          const response = await verifyToken(token);
          if (response) {
            // redirect to dashboard page
            navigation("/");
            return;
          }
          // else show login page
          throw new Error("Needs to log in");
        } else {
          // show login page
          throw new Error("Needs to log in");
        }
      } catch (error) {
        setNotLoggedIn(true);
        // console.error(error.message);
        // show login page
      }
    })();
  });

  return (
    notLoggedIn && (
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
    )
  );
}

export default Login;
