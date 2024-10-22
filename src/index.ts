import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { portfolio } from "./portfolioV1.js";

const app = new Hono();

app.route("/api/v1", portfolio);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
