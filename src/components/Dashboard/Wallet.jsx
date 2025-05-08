import React from "react";
import Chart from "./Chart";
import WalletAction from "./WalletAction";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

function Wallet() {
  return (
    <div className="wallet">
      <div className="amount">
        <h2>Available Balance</h2>
        <h1>&#8358; 5,000.00</h1>

        <Button
          type="primary"
          shape="round"
          size="large"
          icon={<RightOutlined />}
        >
          Transactions
        </Button>
      </div>
      <WalletAction />
      <div className="plot">
        <Chart />
      </div>
    </div>
  );
}

export default Wallet;
