import { IUser } from "./interface";
import { UserModel } from "./model";

export class UsersManager {
  static async createUser(user: IUser): Promise<IUser> {
    return UserModel.create(user);
  }

  static async deleteUser(userId: string): Promise<IUser | null> {
    return UserModel.findOneAndDelete({ _id: userId })
      .orFail(new Error("There is no such a user!"))
      .exec();
  }

  static async updateUser(
    updatedUser: IUser,
    userId: string
  ): Promise<IUser | null> {
    return UserModel.findByIdAndUpdate({ _id: userId }, updatedUser, {
      new: true,
    })
      .orFail(new Error("There is no such a user!"))
      .exec();
  }

  static async getUserById(userId: string): Promise<IUser | null> {
    return UserModel.findById(userId)
      .orFail(new Error("There is no such a user!"))
      .exec();
  }
}
