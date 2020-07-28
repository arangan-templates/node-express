import express from "express";
import * as defaultController from "./controllers/defaultController";

// Create a new express application instance
const app = express();


app.get("/", defaultController.index);

export default app;
