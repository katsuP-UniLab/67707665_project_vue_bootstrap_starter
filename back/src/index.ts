import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

import { callData } from "./modules/db/fetch";

const app = new Elysia();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", () => "Hello Elysia");
app.get("/api/products/all", async () => await callData());

app.listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
