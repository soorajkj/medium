import { factory } from "./lib/factory";
import { logger } from "hono/logger";
import { auth } from "./routes/auth";
import { corsMiddleware } from "./middlewares/cors";
import { csrfMiddleware } from "./middlewares/csrf";
import { story } from "./routes/story";

const app = factory
  .createApp()
  .basePath("/api")
  .use(logger())
  .use(corsMiddleware)
  .use(csrfMiddleware)
  .route("/auth", auth)
  .route("/story", story)
  .notFound((c) => c.json({ message: "Not Found" }, 404));

export default app;
