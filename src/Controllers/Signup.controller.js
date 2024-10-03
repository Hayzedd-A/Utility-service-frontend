// Notification.js
import Notification from "../components/Global/Notifications";
import { sendToServer } from "../config/functions";
import { user_schema } from "../Validations/form.validation";
import axios from "axios";
import { z } from "zod";

// Function to handle form submission for signup
export const submitSignup = async (event, formData) => {
  try {
    // prevent default submit
    event.preventDefault();

    // Validate the form data with the schema
    let validationResult = user_schema.safeParse(formData);
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
    const response = await sendToServer("customers/signup", "POST", formData);
    if (response.status != "success") {
      // If the signup fails
      throw new Error(response.message);
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

export const requestOTP = async data => {
  console.log(data);
  const endpoint = `customers/resend-otp`;
  const response = await sendToServer(endpoint, "POST", data);
  if (response.status === "success") {
    Notification("success", {
      title: "OTP Request Successful",
      body: "An OTP has been sent to your registered email address.",
    });
  }
};
