"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const manager_1 = require("./manager");
class UsersController {
    static async createUser(req, res) {
        res.json(await manager_1.UsersManager.createUser(req.body));
    }
    static async deleteUser(req, res) {
        res.json(await manager_1.UsersManager.deleteUser(req.params.id));
    }
    static async getUserById(req, res) {
        res.json(await manager_1.UsersManager.getUserById(req.params.id));
    }
    static async updateUser(req, res) {
        res.json(await manager_1.UsersManager.updateUser(req.body, req.params.id));
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=controller.js.map