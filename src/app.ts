import express from "express";
import { Database } from "./data/Database";
import defaultRouter from "./routes/defaultRoute";
import userRoute from "./routes/userRoute";

require("console-info");
require("console-warn");
require("console-error");

// Create a new express application instance
const app = express();

app.locals.Db = new Database();
console.info(`Using Db store : ${app.locals.Db.Store}`); 

let routeBase:string = "/api";

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(`${routeBase}`, defaultRouter);
app.use("/", defaultRouter);


app.use(`${routeBase}/`, userRoute);

export default app;
