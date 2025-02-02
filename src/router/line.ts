import express from "express";
import * as line from "@line/bot-sdk";
import { callback, test } from "../controlers/line";

export function getRouter(secret: string) {
  const router = express.Router();

  const config: line.MiddlewareConfig = {
    channelSecret: secret,
  };

  router.post("/callback", line.middleware(config), callback);
  router.get("/test", test);

  return router;
}
