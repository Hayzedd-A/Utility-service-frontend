import React, { useContext, useState } from "react";
import { AppContext } from "../../config/AppContext";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { submitLogin } from "../../Controllers/Signup.controller";
import LoadingSpinner from "../Global/LoadingSpinner";
import PasswordRecovery from "./PasswordRecovery";
import { useNavigate } from "react-router-dom";

function LoginForm({ setUtilContent }) {
  const { setLoginForm, modalOpen, setModalOpen } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const handleForgotPassword = () => {
    // show a pop up of the password recovery interface
    setModalOpen(true);
    setUtilContent(<PasswordRecovery setUtilContent={setUtilContent} />);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const response = await submitLogin({ email, password });
    setLoading(false);
    if (response) {
      //  redirect to dashboard page
      navigation("/");
    }
  };
  return (
    <div className="login-form">
      {/* <UtilModal>
        <Result
          status="success"
          title="Check your registered email for a password reset link"
          // subTitle="You need to verify your email. Check your email inbox or spam folder for the link to verify your email."
        />
      </UtilModal> */}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">
          <span>Email</span>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="Your email"
            id="email"
          />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Your password"
            id="password"
          />
          <span className="showPasswordIcon">
            {showPassword ? (
              <EyeOutlined onClick={() => setShowPassword(false)} />
            ) : (
              <EyeInvisibleOutlined onClick={() => setShowPassword(true)} />
            )}
          </span>
        </label>
        <button type="submit">
          Login <LoadingSpinner loading={loading} />
        </button>
        <a onClick={handleForgotPassword} href="#">
          Forgot Password?
        </a>
      </form>
      <p>
        Don't have an account?{" "}
        <button onClick={() => setLoginForm("signup")}>Sign Up</button>
      </p>
    </div>
  );
}

export default LoginForm;
