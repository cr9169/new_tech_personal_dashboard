"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const usersRouter = express_1.default.Router();
usersRouter.post("/", controller_1.UsersController.createUser);
usersRouter.delete("/:id", controller_1.UsersController.deleteUser);
usersRouter.get("/:id", controller_1.UsersController.getUserById);
usersRouter.put("/:id", controller_1.UsersController.updateUser);
exports.default = usersRouter;
//# sourceMappingURL=router.js.map