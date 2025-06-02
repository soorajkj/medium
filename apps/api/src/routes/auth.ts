import { factory } from "../lib/factory";
import bcrypt from "bcryptjs";
import { sign } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";
import { setCookie } from "hono/cookie";
import { zValidator } from "../utils/validator";
import { signinSchema, signupSchema } from "@medium/validators";

export const auth = factory
  .createApp()
  .post("/signup", zValidator("json", signupSchema), async (c) => {
    const db = c.get("db");
    const { email, name, password } = c.req.valid("json");
    const salt = await bcrypt.genSalt(12);
    const hashed = await bcrypt.hash(password, salt);
    const user = await db.user.findFirst({ where: { email } });
    if (user) return c.json({ error: "User alreay exists" }, 409);
    await db.user.create({
      data: { name, email, password: hashed },
      omit: { password: true },
    });
    return c.json({ message: "User created successfully" }, 201);
  })
  .post("/signin", zValidator("json", signinSchema), async (c) => {
    const { email, password } = c.req.valid("json");
    const db = c.get("db");
    const user = await db.user.findFirst({ where: { email } });
    if (!user) return c.json("Invalid credentials", 400);
    const match = await bcrypt.compare(password, user.password);
    if (!match) return c.json("Incorrect Password", 400);
    const iat = Date.now() / 1000;
    const exp = Math.floor(iat / 1000) + 60 * 5; // 5 mins
    const sub = { id: user.id };
    const payload: JWTPayload = { sub, exp, iat };
    const secret = "supersecret";
    const token = await sign(payload, secret);
    setCookie(c, "auth_cookie", token);
    return c.json(token, 200);
  })
  .get("/users", async (c) => {
    const db = c.get("db");
    const users = await db.user.findMany();
    return c.json(users, 200);
  });
