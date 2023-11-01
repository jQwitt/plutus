import path from "path";

import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import body from "koa-body";
import serve from "koa-static";

import { withLayout } from "./server/routes";

const app = new Koa();
const router = new Router();

app.use(json());
app.use(logger());
app.use(body());

withLayout(router);

app.use(router.routes());

app.use(serve(path.join(__dirname, "/public")));

app.listen(3000, () => {
  console.log("server started!");
});
