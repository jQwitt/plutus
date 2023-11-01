import Router from "koa-router";

import * as db from "../db";

import { Dashboard } from "../../client/layouts";

export enum LayoutRoutes {
  LAYOUT_DASHBOARD = "/layout/dashboard",
}

export async function withLayout(router: Router) {
  router.get(LayoutRoutes.LAYOUT_DASHBOARD, async (ctx) => {
    db.get();

    ctx.body = Dashboard({
      sidebar: undefined,
      content: undefined,
    });
  });
}
