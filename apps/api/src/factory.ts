import { createFactory } from "hono/factory";
import { Env } from "./types/env";
import prisma from "./lib/prisma";

export const factory = createFactory<Env>({
  defaultAppOptions: { strict: false },
  initApp: app => {
    app.use(async (c, next) => {
      const db = await prisma.fetch(c.env.DB);
      c.set("db", db);
      await next();
    });
  },
});
