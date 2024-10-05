import React, { useContext, useState } from "react";
import Header from "./Header";
import { AppContext } from "../../config/AppContext";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { submitLogin } from "../../Controllers/Signup.controller";

function LoginForm() {
  const { setLoginForm } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async e => {
    e.preventDefault();
    const response = await submitLogin({ email, password });
    if (response) {
      //  redirect to dashboard page
      window.location.href = "/dashboard";
    }
  };
  return (
    <div className="login-form">
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
        <button type="submit">Login</button>
        <a href="#">Forgot Password?</a>
      </form>
      <p>
        Don't have an account?{" "}
        <button onClick={() => setLoginForm("signup")}>Sign Up</button>
      </p>
    </div>
  );
}

export default LoginForm;
