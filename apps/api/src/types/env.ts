import { PrismaClient } from "@prisma/client";
import type { JwtVariables } from "hono/jwt";
import { JWTPayload as HonoJWTPaylod } from "hono/utils/jwt/types";

export type JWTSubject = {
  id: string | number;
  email: string;
};

export interface JWTPayload extends HonoJWTPaylod {
  sub: JWTSubject;
}

export interface FactoryBindings {
  Bindings: {
    DB: D1Database;
    JWT_SECRET: string;
    COOKIE_SECRET: string;
  };
  Variables: {
    db: PrismaClient;
  } & JwtVariables<JWTPayload>;
}
