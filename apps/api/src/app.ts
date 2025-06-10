import { factory } from "./lib/factory";
import { logger } from "hono/logger";
import { auth } from "./routes/auth";
import { corsMiddleware } from "./middlewares/cors";
import { csrfMiddleware } from "./middlewares/csrf";
import { story } from "./routes/story";
import { errorHandler } from "./handlers/error";
import { notFoundHandler } from "./handlers/404";

const app = factory
  .createApp()
  .basePath("/api")
  .use(logger())
  .use(corsMiddleware)
  .use(csrfMiddleware)
  .route("/auth", auth)
  .route("/story", story)
  .notFound(notFoundHandler)
  .onError(errorHandler);

export default app;
