import { cors } from "hono/cors";
import { factory } from "../lib/factory";

export const corsMiddleware = factory.createMiddleware(async (c, next) => {
  const r = cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Cookie", "Authorization"],
    credentials: true,
    maxAge: 86400,
  });
  return r(c, next);
});
