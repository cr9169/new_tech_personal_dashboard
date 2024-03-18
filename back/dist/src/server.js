"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const events_1 = require("events");
const express_1 = __importDefault(require("express"));
const router_1 = require("./router");
class Server {
    constructor(port) {
        this.port = port;
        this.app = Server.createExpressApp();
    }
    static createExpressApp() {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use(router_1.appRouter);
        return app;
    }
    async start() {
        this.httpServer = this.app.listen(this.port);
        await (0, events_1.once)(this.httpServer, "listening");
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map