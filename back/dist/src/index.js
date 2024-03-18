"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const server_1 = require("./server");
const { mongo, service } = config_1.default;
const initializeMongo = async () => {
    console.log("Connecting to Mongo...");
    await mongoose_1.default.connect(mongo.uri);
    console.log("Mongo connection established");
};
const main = async () => {
    try {
        await initializeMongo();
        const server = new server_1.Server(service.port);
        await server.start();
        console.log(`Server started on port: ${service.port}`);
    }
    catch (err) {
        console.error("An error occurred:", err);
    }
};
main();
//# sourceMappingURL=index.js.map