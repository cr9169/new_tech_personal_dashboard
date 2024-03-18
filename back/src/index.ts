import mongoose from "mongoose";
import config from "./config";
import { Server } from "./server";

const { mongo, service } = config;

const initializeMongo = async () => {
  console.log("Connecting to Mongo...");

  await mongoose.connect(mongo.uri);

  console.log("Mongo connection established");
};

const main = async () => {
  try {
    await initializeMongo();

    const server = new Server(service.port);

    await server.start();

    console.log(`Server started on port: ${service.port}`);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

main();
