import { createFactory } from "hono/factory";
import { Env } from "./types/env";

export const factory = createFactory<Env>({
  defaultAppOptions: { strict: false },
});
