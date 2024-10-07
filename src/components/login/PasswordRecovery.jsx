import { Button, Input, Result } from "antd";
import React, { useState } from "react";
import { requestResetPassword } from "../../Controllers/Signup.controller";

function PasswordRecovery({ setUtilContent }) {
  const [email, setEmail] = useState("");
  const handlePasswordRecovery = async () => {
    // Send password recovery link to user's registered email
    const response = await requestResetPassword(email);
    if (response) {
      // Show a success message to the user
      setUtilContent(
        <Result
          status="success"
          title="Check your registered email for a password reset link"
        />
      );
    }
  };
  return (
    <div>
      <h1>Password Recovery</h1>
      <p>Enter your registered email to receive a password reset link.</p>

      <Input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        placeholder="Your registered email"
      />
      <p></p>
      <Button onClick={handlePasswordRecovery}>Submit</Button>
    </div>
  );
}

export default PasswordRecovery;
