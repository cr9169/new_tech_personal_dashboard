import * as env from "env-var";

export const config = {
  usersService: {
    usersCrudConnectionString: env
      .get("USERS_CRUD_CONNECTION_URL")
      .default("http://localhost:4000/api/users")
      .asString(),
  },
};
