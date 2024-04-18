import { config } from "../config";
import axios from "axios";
import { IUser } from "../interfaces/User";

class UsersService {
  static async createUser(user: IUser) {
    const newUser = axios.post(
      `${config.usersService.usersCrudConnectionString}`,
      user
    );
    return newUser;
  }

  static async deleteUser(userId: string) {
    const deletedUser = axios.delete(
      `${config.usersService.usersCrudConnectionString}/${userId}`
    );
    return deletedUser;
  }

  static async getUser(userId: string) {
    const user = axios.get(
      `${config.usersService.usersCrudConnectionString}/${userId}`
    );
    return user;
  }

  static async updateUser(userId: string, user: IUser) {
    const updatedUser = axios.put(
      `${config.usersService.usersCrudConnectionString}/${userId}`,
      user
    );
    return updatedUser;
  }
}

export default UsersService;
