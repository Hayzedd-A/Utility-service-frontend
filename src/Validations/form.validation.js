import { z } from "zod";

// Define the schema for the signup form data
// This schema validates the required fields, the format of the fields, and the constraints on the fields
// For example, it checks if the email is a valid email, if the phone number is between 10 and 15 characters, etc.
export const user_signup_schema = z
  .object({
    email: z.string().email({ message: "Email is not a valid email" }),
    phone: z
      .string()
      .min(10, { message: "Phone number is too short" })
      .max(15, { message: "Phone number is too long" }),
    firstname: z.string().min(3, { message: "First name is too short" }),
    surname: z.string().min(3, { message: "Last name is too short" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/, {
        message: "Password must contain uppercase, lowercase and number",
      }),
    confirm_password: z.string(),
  })
  .refine(value => value.confirm_password === value.password, {
    message: "Confirm Passwords do not match",
    path: ["Confirm Password"],
  });

// Define the schema for the login form data
// This schema validates the required fields and the format of the fields
export const user_login_schema = z.object({
  email: z.string().email({ message: "Email is not a valid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/, {
      message: "Password must contain uppercase, lowercase and number",
    }),
});
