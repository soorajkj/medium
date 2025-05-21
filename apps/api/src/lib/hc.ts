import { hc } from "hono/client";
import app from "../app";

const client = hc<typeof app>("");
export type Client = typeof client;

export const hcWithType = (...args: Parameters<typeof hc>): Client => {
  return hc<typeof app>(...args);
};
