import { csrf } from "hono/csrf";
import { factory } from "../lib/factory";

export const csrfMiddleware = factory.createMiddleware(async (c, next) => {
  const r = csrf({
    origin: ["http://localhost:5173"],
  });
  return r(c, next);
});
