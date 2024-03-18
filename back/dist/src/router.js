"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
const router_1 = __importDefault(require("./users/router"));
exports.appRouter = (0, express_1.Router)();
exports.appRouter.use("/api/users", router_1.default);
exports.appRouter.use(["/isAlive", "/isalive", "/health"], (_req, res) => {
    res.status(200).send("alive");
});
exports.appRouter.use("*", (_req, res) => {
    res.status(404).send("Invalid Route");
});
//# sourceMappingURL=router.js.map