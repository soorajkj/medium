import bcrypt from "bcryptjs";
import { sign } from "hono/jwt";
import { factory } from "../lib/factory";
import { zValidator } from "../utils/validator";
import { signinSchema, signupSchema } from "@medium/validators";
import { generateUsername } from "../utils/username";
import { setSignedCookie, deleteCookie } from "hono/cookie";
import { authMiddleware } from "../middlewares/auth";
import { JWTPayload } from "../types/env";
import { AppError } from "../utils/error";

export const auth = factory
  .createApp()
  .post("/signup", zValidator("json", signupSchema), async (c) => {
    const db = c.get("db");
    const data = c.req.valid("json");

    try {
      const u = await db.user.findFirst({ where: { email: data.email } });
      if (u) throw new AppError(400, { message: "Email already exits" });
      const salt = await bcrypt.genSalt(12);
      const hashed = await bcrypt.hash(data.password, salt);
      const username = generateUsername(data.email);
      const user = await db.user.create({
        data: {
          username,
          name: data.name,
          email: data.email,
          password: hashed,
        },
        omit: { password: true },
      });
      return c.json({ message: "User created successfully", user }, 201);
    } catch (error) {
      throw error;
    }
  })
  .post("/signin", zValidator("json", signinSchema), async (c) => {
    const db = c.get("db");
    const { email, password } = c.req.valid("json");

    try {
      const u = await db.user.findFirst({ where: { email } });
      if (!u) throw new AppError(401, { message: "Invalid credentials" });
      const match = await bcrypt.compare(password, u.password);
      if (!match) throw new AppError(401, { message: "Invalid credentials" });

      const COOKIE_JWT_LIFETIME = 60 * 60;
      const now = Math.floor(Date.now() / 1000);

      const payload: JWTPayload = {
        sub: { id: u.id, email: u.email },
        iat: now,
        nbf: now,
        exp: now + COOKIE_JWT_LIFETIME,
      };

      const token = await sign(payload, c.env.JWT_SECRET);
      setSignedCookie(c, "token", token, c.env.COOKIE_SECRET, {
        httpOnly: true,
        maxAge: COOKIE_JWT_LIFETIME,
        secure: false,
        path: "/",
      });

      const { password: p, ...user } = u;
      return c.json({ user }, 200);
    } catch (err) {
      throw err;
    }
  })
  .post("/signout", async (c) => {
    deleteCookie(c, "token", {
      path: "/",
      httpOnly: true,
      secure: false,
    });
    return c.json({ message: "User logged out" });
  })
  .get("/debug", authMiddleware, async (c) => {
    const db = c.get("db");
    const users = await db.user.findMany({ omit: { password: true } });
    return c.json({ users }, 200);
  });
