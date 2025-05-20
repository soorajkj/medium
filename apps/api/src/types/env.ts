import { PrismaClient } from "@prisma/client";
import { JwtVariables } from "hono/jwt";

export interface Env {
  Bindings: {
    DB: D1Database;
    JWT_SECRET: string;
  };
  Variables: {
    db: PrismaClient;
  } & JwtVariables;
}
