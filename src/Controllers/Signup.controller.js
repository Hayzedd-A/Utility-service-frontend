import axios from "axios";
import Notification from "../components/Global/Notifications";
import { baseURL, sendToServer, setLoginHeaders } from "../config/functions";
import {
  user_email_schema,
  user_login_schema,
  user_signup_schema,
} from "../Validations/form.validation";

// Function to handle signup form submission
export const submitSignup = async (event, formData) => {
  try {
    // prevent default submit
    event.preventDefault();

    // Validate the form data with the schema
    let validationResult = user_signup_schema.safeParse(formData);
    if (!validationResult.success) {
      // the validation returns an object containing a stringified array of error messages
      validationResult = await JSON.parse(validationResult.error.message);

      // iterate through the array to display different notification for each error
      for (let eachError of validationResult) {
        Notification("error", {
          title: eachError.path[0],
          body: eachError.message,
        })();
      }
      return;
    }
    // submit the form to the server
    const { data } = await sendToServer("customers/signup", "POST", formData);
    if (data.status !== "success") {
      // If the signup fails
      throw new Error(data.message);
    } else {
      // If the signup is successful, display a success notification Modal
      return true;
    }
  } catch (error) {
    console.error(error.message);

    Notification("error", {
      title: "Signup Failed",
      body: error.message,
    })();
    return false;
  }
};

// Function to handle OTP request
export const requestOTP = async requestData => {
  try {
    console.log(requestData);
    const endpoint = `customers/resend-otp`;
    const { data } = await sendToServer(endpoint, "POST", requestData);
    console.log(data);
    if (data.status !== "success") {
      throw new Error(data.message);
    }
    Notification("success", {
      title: "OTP Requested",
      body: "A new OTP has been sent to your registered email",
    })();
  } catch {
    Notification("error", {
      title: "OTP Request Failed",
      body: "An Error occured, please try again later",
    })();
  }
};

// Function to handle login form submission
export const submitLogin = async data => {
  try {
    console.log(data);
    // validate the data
    let validationResult = user_login_schema.safeParse(data);
    if (!validationResult.success) {
      // the validation returns an object containing a stringified array of error messages
      validationResult = await JSON.parse(validationResult.error.message);

      // iterate through the array to display different notification for each error
      for (let eachError of validationResult) {
        Notification("error", {
          title: eachError.path[0],
          body: eachError.message,
        })();
      }
      return;
    }
    // submit the form to the server
    const endpoint = `customers/login`;
    const response = await sendToServer(endpoint, "POST", data);
    console.log(response);
    if (response.data.status !== "success") {
      // If the login is unsuccessful, display an error notification
      throw new Error(response.data.message);
    }
    // If the login is successful, display a success notification
    console.log(response);
    // Set the token in the browser's local storage
    setLoginHeaders(response.headers);
    return response.data;
  } catch (error) {
    console.error(error.message);

    Notification("error", {
      title: "Login Failed",
      body: error.message,
    })();
    return false;
  }
};

// Function to handle request password reset form submission
export const requestResetPassword = async email => {
  try {
    console.log(email);
    // validate the data
    let validationResult = user_email_schema.safeParse({ email });
    if (!validationResult.success) {
      console.log(validationResult);
      // the validation returns an object containing a stringified array of error messages
      validationResult = await JSON.parse(validationResult.error.message);

      // iterate through the array to display different notification for each error
      for (let eachError of validationResult) {
        Notification("error", {
          title: eachError.path[0],
          body: eachError.message,
        })();
      }
      return;
    }
    // submit the form to the server
    const endpoint = `customers/initiate-password-recovery`;
    const response = await sendToServer(endpoint, "POST", { email });
    console.log(response);
    if (response.data.status !== "success") {
      // If the reset password is unsucceessful
      throw new Error(response.data.message);
    }
    // If the reset password is successful, return true
    return true;
  } catch (error) {
    console.error(error.message);

    Notification("error", {
      title: "Reset Password Failed",
      body: error.message,
    })();
    return false;
  }
};

// Function to handle password reset form submission
export const submitResetPassword = async data => {
  try {
    console.log(data);
    // validate the data
    let validationResult = user_login_schema.safeParse(data);
    if (!validationResult.success) {
      console.log(validationResult);
      // the validation returns an object containing a stringified array of error messages
      validationResult = await JSON.parse(validationResult.error.message);

      // iterate through the array to display different notification for each error
      for (let eachError of validationResult) {
        Notification("error", {
          title: eachError.path[0],
          body: eachError.message,
        })();
      }
      return;
    }
    // submit the form to the server
    const endpoint = `customers/complete-password-recovery`;
    const response = await sendToServer(endpoint, "POST", data);
    console.log(response);
    if (response.data.status !== "success") {
      // If the reset password is unsuccessful
      throw new Error(response.data.message);
    }
    // If the reset password is successful, return a success message
    return true;
  } catch (error) {
    console.error(error.message);

    Notification("error", {
      title: "Reset Password Failed",
      body: error.message,
    })();
    return false;
  }
};

export const verifyToken = async token => {
  const response = await axios({
    url: `${baseURL}/customers/verify-auth-token`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  });
  if (response.data.status !== "success") {
    return false;
  }
  return true;
};
