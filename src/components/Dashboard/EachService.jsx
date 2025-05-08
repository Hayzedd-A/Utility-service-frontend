import React, { useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Flex, Switch } from "antd";
const actions = [
  <EditOutlined key="edit" />,
  <SettingOutlined key="setting" />,
  <EllipsisOutlined key="ellipsis" />,
];
const EachService = ({ services, onclick }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Card
      onClick={onclick}
      code={services.code}
      className={services.code}
      loading={loading}
    >
      <Card.Meta
        avatar={<Avatar size={64} src={services.icon} />}
        title={services.name}
        description={<p>{services.description}</p>}
      />
    </Card>
  );
};
export default EachService;
