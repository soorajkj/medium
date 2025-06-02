import { z } from "zod";

export const signupSchema = z.object({
  email: z
    .string({ required_error: "Email field is required" })
    .email("Invalid email address")
    .trim()
    .toLowerCase(),
  password: z
    .string({ required_error: "Password field is required" })
    .trim()
    .min(8, "Minimum 8 characters")
    .max(24, "Maximum 24 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])/,
      "Password must include at least one uppercase, at least one lowercase, at least one number, and a special character"
    ),
  name: z
    .string({ required_error: "Name field is required" })
    .trim()
    .nonempty("Name can't be empty"),
});

export const signinSchema = z.object({
  email: z
    .string({ required_error: "Email field is required" })
    .trim()
    .nonempty("Email is required")
    .toLowerCase(),
  password: z
    .string({ required_error: "Password field is required" })
    .trim()
    .nonempty("Password is required"),
});

export type SignupSchema = z.infer<typeof signupSchema>;

export type SigninSchema = z.infer<typeof signinSchema>;
