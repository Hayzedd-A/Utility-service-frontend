import React, { useEffect, useState } from "react";
import Navbar from "../components/Dashboard/Navbar";
import Wallet from "../components/Dashboard/Wallet";
import Services from "../components/Dashboard/Services";
import Sidebar from "../components/Dashboard/Sidebar";
import { verifyToken } from "../Controllers/Signup.controller";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigation = useNavigate();
  // check if token exist and is valid
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          throw new Error("You need to log in first");
        }
        // validate token, send token through the headers
        const response = await verifyToken(token);
        if (response) {
          // If token is valid, show the dashboard
          setLoggedIn(true);
        }
      } catch (error) {
        console.log(error.message);
        navigation("/login");
      }
    })();
  }, [navigation]);
  return (
    loggedIn && (
      <div className="dashboard">
        {/* NavBar */}
        <Navbar />
        <div className="body">
          {/* Sidebar */}
          <Sidebar />
          <div className="main">
            {/* Wallet bar */}
            <Wallet />
            {/* Services bar */}
            <Services />
          </div>
        </div>
      </div>
    )
  );
}

export default Dashboard;
