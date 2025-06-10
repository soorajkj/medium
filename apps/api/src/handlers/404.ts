import { NotFoundHandler } from "hono";
import { FactoryBindings } from "../types/env";

export const notFoundHandler: NotFoundHandler<FactoryBindings> = (c) => {
  return c.json("Resource not found", 404);
};
