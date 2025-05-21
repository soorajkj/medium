import { hcWithType } from "@medium/api/hc";

export const rpc = hcWithType("http://localhost:8787", {
  init: { credentials: "include" },
});
