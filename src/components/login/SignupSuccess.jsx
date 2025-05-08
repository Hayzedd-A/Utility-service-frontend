import React from "react";
import { Button, Result } from "antd";
const SignupSuccess = () => (
  <Result
    status="success"
    title="Successfully Signed up"
    subTitle="You need to verify your email. Check your email inbox or spam folder for the link to verify your email."
  />
);
export default SignupSuccess;
