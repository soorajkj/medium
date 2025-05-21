import { PrismaClient } from "@prisma/client";

export interface AppBindings {
  Bindings: {
    DB: D1Database;
  };
  Variables: {
    db: PrismaClient;
  };
}
