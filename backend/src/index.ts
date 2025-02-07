import { Elysia } from "elysia";
import folderController from "./controllers/folderController";

const app = new Elysia()

app
  .group('/api', (app) => app.use(folderController))
  .listen(process.env.PORT || 3049)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
