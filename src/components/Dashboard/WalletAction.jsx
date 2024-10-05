import React from "react";
import {
  PlusCircleOutlined,
  SendOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

function WalletAction() {
  return (
    <div id="actions" className="walletAction">
      <Button
        type="primary"
        shape="round"
        size="large"
        icon={<PlusCircleOutlined />}
      >
        Add Funds
      </Button>
      <Button type="primary" shape="round" size="large" icon={<SendOutlined />}>
        Transfer
      </Button>
      <Button
        type="primary"
        shape="round"
        size="large"
        icon={<DownCircleOutlined size="large" />}
      >
        Withdraw
      </Button>
    </div>
  );
}

export default WalletAction;
