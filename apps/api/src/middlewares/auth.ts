import { verify } from "hono/jwt";
import { getSignedCookie } from "hono/cookie";
import { factory } from "../lib/factory";
import { AppError } from "../utils/error";

export const authMiddleware = factory.createMiddleware(async (c, next) => {
  const token = await getSignedCookie(c, c.env.COOKIE_SECRET, "token");
  if (!token) throw new AppError(401, { message: "No token found" });
  try {
    const payload = await verify(token, c.env.JWT_SECRET);
    c.set("jwtPayload", payload);
    await next();
  } catch (err) {
    throw new AppError(401, { message: "Invalid token" });
  }
});
