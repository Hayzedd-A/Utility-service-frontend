import React from "react";
import Navbar from "../components/Dashboard/Navbar";
import Wallet from "../components/Dashboard/Wallet";
import WalletAction from "../components/Dashboard/WalletAction";
import Services from "../components/Dashboard/Services";
import Sidebar from "../components/Dashboard/Sidebar";

function Dashboard() {
  return (
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
  );
}

export default Dashboard;
