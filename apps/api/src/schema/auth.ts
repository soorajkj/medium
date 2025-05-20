import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().email("Must be a valid email"),
  password: z.string().min(8, "Minimun 8 character"),
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Minimun 2 characters"),
});

export const signinSchema = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});
