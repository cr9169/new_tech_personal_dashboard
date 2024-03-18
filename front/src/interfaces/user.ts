export interface IUser {
  _id?: string;
  username: string;
  password: string;
  role: Role;
}

export type Role = "newUser" | "loggedUser" | "admin";
