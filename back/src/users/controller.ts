import { UsersManager } from "./manager";
import { Request, Response } from "express";

export class UsersController {
  static async createUser(req: Request, res: Response) {
    res.json(await UsersManager.createUser(req.body));
  }

  static async deleteUser(req: Request, res: Response) {
    res.json(await UsersManager.deleteUser(req.params.id));
  }

  static async getUserById(req: Request, res: Response) {
    res.json(await UsersManager.getUserById(req.params.id));
  }

  static async updateUser(req: Request, res: Response) {
    res.json(await UsersManager.updateUser(req.body, req.params.id));
  }
}
