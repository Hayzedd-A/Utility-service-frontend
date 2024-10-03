import React, { useContext, useState } from "react";
import Header from "./Header";
import { AppContext } from "../../config/AppContext";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

function LoginForm() {
  const { setLoginForm } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login-form">
      <form>
        <label htmlFor="email">
          <span>Email</span>
          <input type="text" placeholder="Your email" id="email" />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input
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
