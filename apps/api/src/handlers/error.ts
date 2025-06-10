import { ErrorHandler } from "hono";
import { FactoryBindings } from "../types/env";
import { AppError } from "../utils/error";

export const errorHandler: ErrorHandler<FactoryBindings> = (err, c) => {
  if (err instanceof AppError) {
    return c.json({ ...err }, err.status);
  }
  return c.json("Internal server error", 500);
};
