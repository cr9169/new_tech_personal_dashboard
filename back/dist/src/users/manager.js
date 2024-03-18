"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersManager = void 0;
const model_1 = require("./model");
class UsersManager {
    static async createUser(user) {
        return model_1.UserModel.create(user);
    }
    static async deleteUser(userId) {
        return model_1.UserModel.findOneAndDelete({ _id: userId })
            .orFail(new Error("There is no such a user!"))
            .exec();
    }
    static async updateUser(updatedUser, userId) {
        return model_1.UserModel.findByIdAndUpdate({ _id: userId }, updatedUser, {
            new: true,
        })
            .orFail(new Error("There is no such a user!"))
            .exec();
    }
    static async getUserById(userId) {
        return model_1.UserModel.findById(userId)
            .orFail(new Error("There is no such a user!"))
            .exec();
    }
}
exports.UsersManager = UsersManager;
//# sourceMappingURL=manager.js.map