import { factory } from "./factory";
import { logger } from "hono/logger";
import { debug } from "./routes/debug";

const app = factory
  .createApp()
  .basePath("/api")
  .use(logger())
  .route("/debug", debug)
  .notFound((c) => c.json({ message: "Not Found" }, 404))
  .onError((err, c) => c.json({ message: "Error", err: err.stack }, 500));

export default app;
