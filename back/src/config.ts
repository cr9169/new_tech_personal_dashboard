import * as env from "env-var";
import dotenv from "dotenv";

dotenv.config();

const config = {
  service: {
    port: parseInt(process.env.PORT || "4000", 10),
  },
  mongo: {
    uri: env
      .get("MONGO_URI")
      .default("mongodb://localhost")
      .required()
      .asString(),
    usersCollectionName: env
      .get("USERS_COLLECTION_NAME")
      .default("users")
      .required()
      .asString(),
  },
};

export default config;
