import { ValidationTargets } from "hono";
import { ZodSchema } from "zod";
import { zValidator as zv } from "@hono/zod-validator";

export const zValidator = <
  T extends ZodSchema,
  Target extends keyof ValidationTargets,
>(
  target: Target,
  schema: T
) =>
  zv(target, schema, (result, c) => {
    if (!result.success) {
      const message = result.error.name;
      const cause = result.error.issues.map((issue) => issue.message);
      return c.json({ message, cause }, 400);
    }
  });
