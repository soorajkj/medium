import { createFactory } from "hono/factory";
import prisma from "./prisma";
import { AppBindings } from "../types/env";

export const factory = createFactory<AppBindings>({
  defaultAppOptions: { strict: false },
  initApp: app => {
    app.use(async (c, next) => {
      const db = await prisma.fetch(c.env.DB);
      c.set("db", db);
      await next();
    });
  },
});
