import React from "react";
import { Button, Result } from "antd";
import { requestOTP } from "../../Controllers/Signup.controller";
const ErrorVerification = ({ data }) => {
  const handleResendOTP = () => {
    // Send OTP to user's registered email
    requestOTP(data);
  };

  return (
    <Result
      status="error"
      title="Invalid or expired OTP"
      subTitle="
    An error occurred while verifying your email. Please try again later or contact support."
      extra={
        <Button type="primary" onClick={handleResendOTP}>
          Resend OTP link
        </Button>
      }
    />
  );
};
export default ErrorVerification;
