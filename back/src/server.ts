import { once } from "events";
import express from "express";
import http from "http";
import { appRouter } from "./router";
import config from "./config";

export class Server {
  private app: express.Application;
  private httpServer!: http.Server;
  private port: number;

  constructor(port: number) {
    this.port = port;
    this.app = Server.createExpressApp();
  }

  static createExpressApp() {
    const app = express();

    app.use(express.json());
    app.use(appRouter);

    return app;
  }

  async start() {
    this.httpServer = this.app.listen(this.port);
    await once(this.httpServer, "listening");
  }
}
