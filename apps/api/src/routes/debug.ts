import { factory } from "../factory";

export const debug = factory.createApp().get("/", async c => {
  return c.json("Debug route", 200);
});
