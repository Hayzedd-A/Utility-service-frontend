import React, { useContext, useState } from "react";
import { AppContext } from "../../config/AppContext";

import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { submitSignup } from "../../Controllers/Signup.controller";
import UtilModal from "../Global/UtilModal";
import SignupSuccess from "./SignupSuccess";
import LoadingSpinner from "../Global/LoadingSpinner";

function SignupForm({ setUtilContent }) {
  const { setLoginForm, setModalOpen } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successSignup, setSuccessSignup] = useState(false);
  const formData = () => ({
    email,
    phone,
    firstname,
    surname: lastname,
    password,
    confirm_password: confirmPassword,
  });
  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    let response = await submitSignup(event, formData());
    setLoading(false);
    if (response) {
      // signup was successful, display success Modal and redirect to email verification page
      setModalOpen(true);
      console.log(setUtilContent);
      setUtilContent(<SignupSuccess />);
      setLoginForm("login");
      // clear form data
      setEmail("");
      setPhone("");
      setFirstname("");
      setLastname("");
      setPassword("");
      setConfirmPassword("");
    }
  };
  return (
    <div className="signup-form">
      {/* <UtilModal>{successSignup && <SignupSuccess />}</UtilModal> */}
      <form id="signup" onSubmit={event => handleSubmit(event)}>
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
        <label htmlFor="firstName">
          <span>First Name</span>
          <input
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
            type="text"
            placeholder="Your first name"
            id="firstName"
          />
        </label>
        <label htmlFor="lastName">
          <span>Last Name</span>
          <input
            value={lastname}
            onChange={e => setLastname(e.target.value)}
            type="text"
            placeholder="Your last name"
            id="lastName"
          />
        </label>
        <label htmlFor="phoneNumber">
          <span>Phone Number</span>
          <input
            value={phone}
            onChange={e => setPhone(e.target.value)}
            type="text"
            placeholder="Your phone Number"
            id="phoneNumber"
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
        <label htmlFor="confirmPassword">
          <span>Confirm Password</span>
          <input
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm your password"
            id="confirmPassword"
          />
        </label>
        <button type="submit">
          Sign Up <LoadingSpinner loading={loading} />
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <button onClick={() => setLoginForm("login")}>Login</button>
      </p>
    </div>
  );
}

export default SignupForm;
