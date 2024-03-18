import mongoose, { Schema } from "mongoose";
import { IUser } from "./interface";

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  role: {
    type: String,
    required: true,
    enum: ["newUser", "loggedUser", "admin"],
  },
});

export const UserModel = mongoose.model<IUser>("User", UserSchema);
