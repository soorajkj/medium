import { factory } from "./factory";
import { logger } from "hono/logger";
import { auth } from "./routes/auth";

const app = factory
  .createApp()
  .basePath("/api")
  .use(logger())
  .route("/auth", auth)
  .notFound(c => c.json({ message: "Not Found" }, 404))
  .onError((err, c) => c.json({ message: "Error", err: err.stack }, 500));

export default app;
