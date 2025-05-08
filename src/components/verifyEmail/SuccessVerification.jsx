import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
const SuccessVerification = () => {
  const navigation = useNavigate();
  const handleLogin = () => {
    // Redirect to login page
    navigation("/");
  };
  return (
    <Result
      status="success"
      title="Successfully Verified your email"
      subTitle="
      Your email has been successfully verified. Now, you can use your email to log in to your account.
      If you have any further questions, feel free to contact us."
      extra={
        <Button type="primary" onClick={handleLogin}>
          Log In
        </Button>
      }
    />
  );
};
export default SuccessVerification;
