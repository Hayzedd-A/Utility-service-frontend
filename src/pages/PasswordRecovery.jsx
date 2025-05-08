import { Button, Input, Result } from "antd";
import React, { useContext, useState } from "react";
import UtilModal from "../components/Global/UtilModal";
import { AppContext } from "../config/AppContext";
import { useSearchParams } from "react-router-dom";
import { submitResetPassword } from "../Controllers/Signup.controller";

function PasswordRecovery() {
  // Show a success message to the user when the password is changed successfully.
  // Log the user out of all other devices.
  // Redirect to the login page.
  const { setModalOpen } = useContext(AppContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [token] = useSearchParams();
  const recovery_code = token.get("link");

  const handlePasswordSubmit = async () => {
    const data = {
      password,
      email,
      recovery_code,
    };
    setLoading(true);
    const response = await submitResetPassword(data);
    setLoading(false);
    if (response) {
      // Redirect to the login page
      setModalOpen(true);
    }
  };

  // setModalOpen(true);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1rem",
        padding: "2rem",
        margin: "0 auto",
        maxWidth: "400px",
      }}
    >
      <UtilModal>
        <Result
          status="success"
          title="Password changed successfully"
          subTitle="You can now login with your new password. You also have been logged out from all other devices."
          extra={
            <Button
              type="primary"
              onClick={() => (window.location.href = "/login")}
            >
              Log In
            </Button>
          }
        />
      </UtilModal>
      <h1>Password Recovery</h1>
      <p>Please enter your registered email and your new password.</p>
      <Input
        type="email"
        onChange={e => setEmail(e.target.value)}
        placeholder="Your registered email"
      />
      <Input
        type="text"
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter your new password"
      />

      <Button onClick={handlePasswordSubmit}>Submit</Button>
    </div>
  );
}

export default PasswordRecovery;
