import express from "express";
import { UsersController } from "./controller";

const usersRouter = express.Router();

// POST /users to create a new user
usersRouter.post("/", UsersController.createUser);

// DELETE /users/:id to delete a user by ID
usersRouter.delete("/:id", UsersController.deleteUser);

// GET /users/:id to get a user by ID
usersRouter.get("/:id", UsersController.getUserById);

// PUT /users/:id to update a user by ID
usersRouter.put("/:id", UsersController.updateUser);

export default usersRouter;
